import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Component } from '@angular/core';
import { NavParams, NavController, Platform } from '@ionic/angular';

// @IonicPage()
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private platform: Platform ,private browser: InAppBrowser){
    this.platform.ready().then(() => {
      this.browser.create(`https://sandbox-nga-sce.cs5.force.com/ngasceaep2/login`, `_blank`, { location: 'no', toolbar: 'no' });
    });
  }
    OpenBrowser(){
      const url = 'https://sandbox-nga-sce.cs5.force.com/ngasceaep2/login/';

      const options: InAppBrowserOptions = {
        location: 'no',
        hidden: 'no',
        clearcache: 'yes',
        clearsessioncache: 'yes',
        zoom: 'yes',
        hardwareback: 'no',
        mediaPlaybackRequiresUserAction: 'no',
        shouldPauseOnSuspend: 'no',
        closebuttoncaption: 'Close',
        disallowoverscroll: 'no',
        toolbar: 'yes',
        enableViewportScale: 'no',
        allowInlineMediaPlayback: 'no',
        presentationstyle: 'pagesheet',
        fullscreen: 'yes',
      }
      this.browser.create(url, '_blank', options)
    }
}
