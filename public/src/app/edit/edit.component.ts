import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router : Router,
    private _route: ActivatedRoute
  ) { }

  editProduct:any;
  errors=[]

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.getEditProduct(params['id'])
    })

  }

  getEditProduct(id){
    let obs = this._httpService.getOneProduct(id);
    obs.subscribe(data => {
      if(data['results']){
        this.editProduct = data['results'];
      }
    })
  }

  updateProduct(){
    this.errors = [];
    let obs = this._httpService.updateProduct(this.editProduct);

    obs.subscribe(data => {
      if(data['results']){
        this._router.navigate(['/']);
      }
      else if(data['errors']){
        for(var key in data['errors']){
          this.errors.push(data['errors'][key]['message']);
        }
      }
    })
  }

}
