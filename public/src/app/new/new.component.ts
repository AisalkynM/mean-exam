import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit, OnDestroy {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  errors=[]
  newProduct:any;
  ngOnInit() {
    this.newProduct ={
      name:'',
      qty:0,
      price:0
    }

  }
  ngOnDestroy(){
    this.newProduct=null;
  }

  createProduct(){
    this.errors = [];
    let obs = this._httpService.createProduct(this.newProduct);
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
