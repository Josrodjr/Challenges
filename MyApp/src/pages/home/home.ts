import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { App, MenuController, AlertController } from 'ionic-angular';
import {FirstPage} from '../first/first' ;
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {

	@ViewChild('username')uname;
	@ViewChild('password')password;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public alertCtrl: AlertController) {



  }

  signIn(){
  	//console.log(this.uname.value,this.password.value);

    this.navCtrl.push(RegisterPage)

  }

   LogIn(){
    //console.log(this.uname.value,this.password.value); 
    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
    .then(data=>{
      this.alert('You are logged in!');
      this.navCtrl.setRoot(FirstPage);

    })
    .catch(error=>{
      console.log('got an error',error);
      this.alert(error.message);

    }); 
  }

  alert(message: string){
    this.alertCtrl.create({
       title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();

  }

}
