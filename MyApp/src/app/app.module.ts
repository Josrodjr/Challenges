import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import {ActivitiesPage} from '../pages/activities/activities' ;
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



const firebaseAuth = {
    apiKey: "AIzaSyAanbw2UY79dX_YHfMIxSUCQMMLa9e-7LQ",
    authDomain: "ing-de-soft-8a683.firebaseapp.com",
    databaseURL: "https://ing-de-soft-8a683.firebaseio.com",
    projectId: "ing-de-soft-8a683",
    storageBucket: "",
    messagingSenderId: "1042773694376"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    ActivitiesPage,
    RegisterPage


    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    ActivitiesPage,
    RegisterPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
