import { MainPage } from './../pages/main/main';
import { SQLite } from '@ionic-native/sqlite';
import { NativeStorage } from '@ionic-native/native-storage';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SharedPreferences } from '../helper/preferences';
import { SqliteHelper } from '../helper/sqlite';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    NativeStorage,
    SharedPreferences,
    SQLite,
    SqliteHelper
  ]
})
export class AppModule { }
