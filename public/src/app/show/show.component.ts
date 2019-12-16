import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router:Router,
    private _route:ActivatedRoute) { }

  oneProduct:any;
  allProducts:any;
  
  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.getOneProductFromService(params['id'])
    })
  }

  getOneProductFromService(id){
    console.log(id)

    let obs = this._httpService.getOneProduct(id);
    obs.subscribe(data=>{
      if(data['results']){
        this.oneProduct = data['results']
      }
    })
  }




  
  destroyOneProduct(id){
    let obs = this._httpService.destroyProduct(id);
    obs.subscribe(data => {
      if(data['results']){
        this.getAllProductsFromService();
        this._router.navigate(['/']);
      }
    })
  }
  getAllProductsFromService(){
    let obs = this._httpService.getAllProducts();
    obs.subscribe(data => {
      if(data['results']){
        this.allProducts = data['results'];
      }
    })
  }


}
