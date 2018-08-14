import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  restaurantsList:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('constructor MainPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.getrestaurantsData();
  }
  ionViewCanEnter(){
    console.log('ionViewCanEnter MainPage');
  }
  getrestaurantsData() {
    console.log('getrestaurantsData called'); 
    this.restaurantsList = [
      {
        "restarant_image":"../../assets/restaranticons/Athidii.jpg",
        "restarant_name":"Athidii Restaurant ",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
      },
      {
        "restarant_image":"../../assets/restaranticons/MCPFC.jpg",
        "restarant_name":"MCPFC Warangal",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
    },
    {
      "restarant_image":"../../assets/restaranticons/bommarillu.jpg",
      "restarant_name":"Bommarillu Restaurant",
      "restarant_specail":"Indian,Chinese",
      "restarant_rating":"200",
      "restarant_star":"4.4",
      "delivery_time":"30"
    },
      {
        "restarant_image":"../../assets/restaranticons/Dahliaa.jpg",
        "restarant_name":"Dahliaa Foods ",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
      },{
        "restarant_image":"../../assets/restaranticons/mrcb.jpg",
        "restarant_name":"MRCB Biryani ",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
      },
      {
        "restarant_image":"../../assets/restaranticons/Kanishka.jpg",
        "restarant_name":"Kanishka Restaurant",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
      },
      {
        "restarant_image":"../../assets/restaranticons/PalamuruGrill.jpg",
        "restarant_name":"Palamuru Grill Restaurant",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
      },
      {
        "restarant_image":"../../assets/restaranticons/Dahliaa.jpg",
        "restarant_name":"Dahliaa Foods ",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
      },{
        "restarant_image":"../../assets/restaranticons/Dine9.jpg",
        "restarant_name":"Dine9 Arabian Multicuisine Restaurant",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
      },
      {
        "restarant_image":"../../assets/restaranticons/vaihnavigrand.jpg",
        "restarant_name":"Hotel Vaishnavi Grand",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
      },
      {
        "restarant_image":"../../assets/restaranticons/Kingsway.jpg",
        "restarant_name":"Kingsway Multi Cuisine Restaurant",
        "restarant_specail":"Indian,Chinese",
        "restarant_rating":"200",
        "restarant_star":"4.4",
        "delivery_time":"30"
      },
      {   
          "restarant_image":"../../assets/restaranticons/NAIVEDHY.jpg",
          "restarant_name":"NAIVEDHY The Snak Bar",
          "restarant_specail":"Indian,Chinese",
          "restarant_rating":"200",
          "restarant_star":"4.4",
          "delivery_time":"30"
      }, 
        {
          "restarant_image":"../../assets/restaranticons/Spicy.jpg",
          "restarant_name":"Spicy Family Restaurant ",
          "restarant_specail":"Indian,Chinese",
          "restarant_rating":"200",
          "restarant_star":"4.4",
          "delivery_time":"30"
        },
        {
          "restarant_image":"../../assets/restaranticons/GreenPark.jpg",
          "restarant_name":"Green Park (Hanamkonda)",
          "restarant_specail":"Indian,Chinese",
          "restarant_rating":"200",
          "restarant_star":"4.4",
          "delivery_time":"30"
        },
        {   
            "restarant_image":"../../assets/restaranticons/USPizza.jpg",
            "restarant_name":"US Pizza",
            "restarant_specail":"Indian,Chinese",
            "restarant_rating":"200",
            "restarant_star":"4.4",
            "delivery_time":"30"
        },
        {
            "restarant_image":"../../assets/restaranticons/Daawat.jpg",
            "restarant_name":"Daawat Multi Cuisine Family Resturant",
            "restarant_specail":"Indian,Chinese",
            "restarant_rating":"200",
            "restarant_star":"4.4",
            "delivery_time":"30"
        }
      ];
  } 

}
