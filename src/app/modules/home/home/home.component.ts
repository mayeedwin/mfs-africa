import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Properties.
  actions = [
    {
      name: 'Top Up',
      icon: 'topup',
    },
    {
      name: 'Send Money',
      icon: 'send',
    },
    {
      name: 'Collect',
      icon: 'collect',
    },
    {
      name: 'Withdraw',
      icon: 'withdraw',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
