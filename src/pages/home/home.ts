import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isLoggedIn:boolean = false ;
  data = {}  ;
  constructor(public navCtrl: NavController, private fb: Facebook) {

  }


  facebookLogin(){

    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) =>{
        console.log('Logged into Facebook!', res);
        this.isLoggedIn = true ;
        this.data = res ;
      })
      .catch(e => {
        console.log('Error logging into Facebook', e)
      });


    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  facebookLogout(){
    this.fb.logout()
      .then((res: any) =>{
        console.log('Logged out Facebook!', res);
        this.isLoggedIn = false ;
        this.data = {} ;
      })
      .catch(e => {
        console.log('Error logging out Facebook', e)
      });
  }
}
