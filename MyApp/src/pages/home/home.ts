import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { App, MenuController, AlertController } from 'ionic-angular';
import {FirstPage} from '../first/first' ;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

	@ViewChild('username')uname;
	@ViewChild('password')password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {



  }

  signIn(){
  	//console.log(this.uname.value,this.password.value); 
  	if(this.uname.value=="admin" && this.password.value=="admin"){

  		 let alert = this.alertCtrl.create({
      title: 'Sign In Request',
      subTitle: 'This page is under construction!',
      buttons: ['OK']
    });
    alert.present();

  	}
  }

   LogIn(){
    //console.log(this.uname.value,this.password.value); 
    if(this.uname.value=="admin" && this.password.value=="admin"){

       let alert = this.alertCtrl.create({
      title: 'Login Succesful!',
      subTitle: 'You are logged in',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(FirstPage);
    
    }
  }

}