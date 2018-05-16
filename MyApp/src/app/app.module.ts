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
    apiKey: "AIzaSyAdwezja3VhPT6LGapYw8mJH5K55RugqxI",
    authDomain: "test-project-f114a.firebaseapp.com",
    databaseURL: "https://test-project-f114a.firebaseio.com",
    projectId: "test-project-f114a",
    storageBucket: "test-project-f114a.appspot.com",
    messagingSenderId: "858830460982"
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
