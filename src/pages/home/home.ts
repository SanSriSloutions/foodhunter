import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  films: any;

  constructor(public navCtrl: NavController, private apiProvider: ApiProvider) {
    this.init();
  }

  init() {
    this.apiProvider.getFilms().then(data => {
      this.films = data;
    }, err => {
      console.log("error", err);
    })
  }
  open(){
    this.apiProvider.getFilms().then(data => {
      this.films = data;
    }, err => {
      console.log("error", err);
    })
  }
  openDetails(film) {

    
  }
}
