import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SharedPreferences } from '../../helper/preferences';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  films: any;

  constructor(public navCtrl: NavController, private apiProvider: ApiProvider,private preferences:SharedPreferences) {
    this.init();
  }

  init() {
    this.apiProvider.getFilms().then(data => {
      this.films = data;
    }, err => {
      console.log("error", err);
    })
  }

  //checkApi Data.
  checkAPi(){
    this.apiProvider.getFilms().then(data => {
      this.films = data;
    }, err => {
      console.log("error", err);
    })
  }
  //check sharefPref data
  checksharedPref(){
    this.preferences.saveData("name","srinu");
    this.preferences.getData("name").then(data=>{
      console.log(data);
    })
  }
  openDetails(film) {

    
  }
}
