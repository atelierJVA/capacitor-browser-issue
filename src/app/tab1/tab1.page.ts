import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  booleanValue = false;

  constructor() {
    Browser.addListener('browserFinished', () => {
      this.booleanValue = true;
    });
  }

  async openBrowser(urlInput) {
    this.booleanValue = false;
    await Browser.open({url: urlInput});

  }

  toggleValue() {
    this.booleanValue = !this.booleanValue;
  }

  do_something() {
    const ignored = 1;
  }
}
