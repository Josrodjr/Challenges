import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { HomePage } from '../pages/home/home';
import {FirstPage} from '../pages/first/first' ;
import {ActivitiesPage} from '../pages/activities/activities' ;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  HomePage = HomePage;
  FirstPage = FirstPage;
  ActivityPage = ActivitiesPage;

   @ViewChild('nav') nav:NavController; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  
}

