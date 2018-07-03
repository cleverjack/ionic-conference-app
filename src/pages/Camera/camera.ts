import { SettingsPage } from '../Settings/settings';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  constructor(public navCtrl: NavController) {

  }

  goToHomePage(){
    this.navCtrl.push(HomePage);
  }

  goToSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }
}
