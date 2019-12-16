import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  allProducts:any
  ngOnInit() {
    this.getAllProductsFromService()
  }

  getAllProductsFromService(){
    let obs = this._httpService.getAllProducts();
    obs.subscribe(data => {
      if(data['results']){
        this.allProducts = data['results'];
      }
    })
  }

  destroyOneProduct(id){
    let obs = this._httpService.destroyProduct(id);
    obs.subscribe(data => {
      if(data['results']){
        this.getAllProductsFromService();
      }
    })
  }
}
