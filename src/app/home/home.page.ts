import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numbers = [
    {
      number: '1'
    },
    {
      number: '2'
    },
    {
      number: '3'
    },
    {
      number: '4'
    },
    {
      number: '5'
    },
    {
      number: '6'
    },
    {
      number: '7'
    },
    {
      number: '8'
    },
    {
      number: '9'
    },
    {
      number: '10'
    },
    {
      number: '11'
    },
    {
      number: '12'
    },
    {
      number: '13'
    },
    {
      number: '14'
    },
    {
      number: '15'
    },
    {
      number: '16'
    },
    {
      number: '17'
    },
    {
      number: '18'
    },
    {
      number: '19'
    },
    {
      number: '20'
    },
  ];

  constructor() {}

  // pull down list to trigger this
  refresh(event) {
      this.numbers = [];
      event.target.complete();
  }

  trackBy(index, item) {
    return item ? item.id : index;
  }

}
