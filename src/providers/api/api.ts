import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  baseUrl: string = 'https://swapi.co/api/films';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  //common headers for api calls.
  preareHeader() {
    let options={
      "AuthenticationToken":"ff9cdf16-aa5e-4623-b1f7-ed66fbb75172",
      "AppSource":"android_2.1.7",
      "UserId":"2",
      "MobileLanguage":"1"
    }
    return options;
  }

  //get request example
  getFilms() {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  //post request example
  getHomeSections(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl, data,{
        headers:this.preareHeader()
      })
      .subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }
}
