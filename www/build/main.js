webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('constructor MainPage');
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
        this.getrestaurantsData();
    };
    MainPage.prototype.ionViewCanEnter = function () {
        console.log('ionViewCanEnter MainPage');
    };
    MainPage.prototype.getrestaurantsData = function () {
        console.log('getrestaurantsData called');
        this.restaurantsList = [
            {
                "restarant_image": "../../assets/restaranticons/Athidii.jpg",
                "restarant_name": "Athidii Restaurant ",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/MCPFC.jpg",
                "restarant_name": "MCPFC Warangal",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/bommarillu.jpg",
                "restarant_name": "Bommarillu Restaurant",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/Dahliaa.jpg",
                "restarant_name": "Dahliaa Foods ",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            }, {
                "restarant_image": "../../assets/restaranticons/mrcb.jpg",
                "restarant_name": "MRCB Biryani ",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/Kanishka.jpg",
                "restarant_name": "Kanishka Restaurant",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/PalamuruGrill.jpg",
                "restarant_name": "Palamuru Grill Restaurant",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/Dahliaa.jpg",
                "restarant_name": "Dahliaa Foods ",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            }, {
                "restarant_image": "../../assets/restaranticons/Dine9.jpg",
                "restarant_name": "Dine9 Arabian Multicuisine Restaurant",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/vaihnavigrand.jpg",
                "restarant_name": "Hotel Vaishnavi Grand",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/Kingsway.jpg",
                "restarant_name": "Kingsway Multi Cuisine Restaurant",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/NAIVEDHY.jpg",
                "restarant_name": "NAIVEDHY The Snak Bar",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/Spicy.jpg",
                "restarant_name": "Spicy Family Restaurant ",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/GreenPark.jpg",
                "restarant_name": "Green Park (Hanamkonda)",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/USPizza.jpg",
                "restarant_name": "US Pizza",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            },
            {
                "restarant_image": "../../assets/restaranticons/Daawat.jpg",
                "restarant_name": "Daawat Multi Cuisine Family Resturant",
                "restarant_specail": "Indian,Chinese",
                "restarant_rating": "200",
                "restarant_star": "4.4",
                "delivery_time": "30"
            }
        ];
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"D:\Development\sridhar_Project\Foodhunter\foodhunter\src\pages\main\main.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>RESTUARENTS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>   \n      <ion-card *ngFor="let restaurant of restaurants"> \n          <ion-card-content (click)="goToRestaurentDetails(restaurant)">  \n            <div style="float: left;">\n              <img style="width: 100px;"src="{{restaurant.restarant_image}}">  \n            </div>\n            <div>\n              <h2>{{restaurant.restarant_name}}</h2>\n              <p>{{restaurant.restarant_specail}}</p>\n              <div style="float: left;width: 40%;">\n                <div>\n                  <span>{{restaurant.restarant_star}}</span>\n                </div> \n                <div>\n                    <span class=""> {{restaurant.restarant_rating}}</span>\n                    <span class=""> Ratings</span>\n                </div> \n            </div>\n            <div>\n                <div>\n                    <span class=""> {{restaurant.delivery_time}}</span>\n                    <span class=""> Mins</span>\n                </div> \n                <div>\n                     <span class=""> Delivery Time</span>\n                </div> \n            </div>\n            </div>\n          </ion-card-content>\n        </ion-card> \n</ion-content>\n '/*ion-inline-end:"D:\Development\sridhar_Project\Foodhunter\foodhunter\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], MainPage);
    return MainPage;
    var _a, _b;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/main/main.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.baseUrl = 'https://swapi.co/api/films';
        console.log('Hello ApiProvider Provider');
    }
    //common headers for api calls.
    ApiProvider.prototype.preareHeader = function () {
        var options = {
            "AuthenticationToken": "ff9cdf16-aa5e-4623-b1f7-ed66fbb75172",
            "AppSource": "android_2.1.7",
            "UserId": "2",
            "MobileLanguage": "1"
        };
        return options;
    };
    //get request example
    ApiProvider.prototype.getFilms = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseUrl)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    //post request example
    ApiProvider.prototype.getHomeSections = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl, data, {
                headers: _this.preareHeader()
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqliteHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SqliteHelper = /** @class */ (function () {
    function SqliteHelper(sqlite) {
        this.sqlite = sqlite;
    }
    SqliteHelper.prototype.createDataBase = function () {
        this.dbInstance = this.sqlite.create({
            name: 'foodhunter.db',
            location: 'default',
        });
    };
    SqliteHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__["a" /* SQLite */]])
    ], SqliteHelper);
    return SqliteHelper;
}());

//# sourceMappingURL=sqlite.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedPreferences; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedPreferences = /** @class */ (function () {
    function SharedPreferences(nativeStorage) {
        this.nativeStorage = nativeStorage;
    }
    SharedPreferences.prototype.saveData = function (key, value) {
        this.nativeStorage.setItem(key, value)
            .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
    };
    SharedPreferences.prototype.getData = function (key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.nativeStorage.getItem(key)
                .then(function (data) { return resolve(data); }, function (error) { return resolve(""); });
        });
    };
    SharedPreferences = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], SharedPreferences);
    return SharedPreferences;
}());

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_main_main__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helper_preferences__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helper_sqlite__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_main_main__["a" /* MainPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_main_main__["a" /* MainPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_12__helper_preferences__["a" /* SharedPreferences */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_13__helper_sqlite__["a" /* SqliteHelper */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_main_main__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_sqlite__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, sqlitehelper) {
        this.sqlitehelper = sqlitehelper;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_main_main__["a" /* MainPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //  sqlitehelper.createDataBase();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Development\sridhar_Project\Foodhunter\foodhunter\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Development\sridhar_Project\Foodhunter\foodhunter\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__helper_sqlite__["a" /* SqliteHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__helper_sqlite__["a" /* SqliteHelper */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_preferences__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, apiProvider, preferences) {
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.preferences = preferences;
        this.init();
    }
    HomePage.prototype.init = function () {
        var _this = this;
        this.apiProvider.getFilms().then(function (data) {
            _this.films = data;
        }, function (err) {
            console.log("error", err);
        });
    };
    //checkApi Data.
    HomePage.prototype.checkAPi = function () {
        var _this = this;
        this.apiProvider.getFilms().then(function (data) {
            _this.films = data;
        }, function (err) {
            console.log("error", err);
        });
    };
    //check sharefPref data
    HomePage.prototype.checksharedPref = function () {
        this.preferences.saveData("name", "srinu");
        this.preferences.getData("name").then(function (data) {
            console.log(data);
        });
    };
    HomePage.prototype.openDetails = function (film) {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Development\sridhar_Project\Foodhunter\foodhunter\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title>\n      Film Titles\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding> \n    <button (click)="checkAPi()">open </button>\n    <button (click)="checksharedPref()">check</button>\n <ion-list>\n   <button style="background: peru" ion-item *ngFor="let film of (films)?.results" (click)="openDetails(film)">{{film.title}}</button>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\Development\sridhar_Project\Foodhunter\foodhunter\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__helper_preferences__["a" /* SharedPreferences */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map