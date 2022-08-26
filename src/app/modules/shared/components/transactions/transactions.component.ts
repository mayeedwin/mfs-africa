import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  // Properties.
  data = [
    {
      id: 1,
      name: 'John Dembe',
      amount: 5846.0,
      currency: 'UGX',
      type: 'send-money',
      status: 'completed',
      time_since: '4 hr',
    },
    {
      id: 2,
      name: 'Mary Kaikara',
      amount: 5846.0,
      currency: 'UGX',
      type: 'collection',
      status: 'completed',
      time_since: '4 hr',
    },
    {
      id: 3,
      name: 'Phillip Kenyanga',
      amount: 5846.0,
      currency: 'UGX',
      type: 'withdrawal',
      status: 'completed',
      time_since: '2 d',
    },
    {
      id: 4,
      name: 'Nelson Kizza',
      amount: 5846.0,
      currency: 'UGX',
      type: 'send-money',
      status: 'pending',
      time_since: '5 d',
    },
    {
      id: 5,
      name: 'Alice Mukassa',
      amount: 5846.0,
      currency: 'UGX',
      type: 'send-money',
      status: 'failed',
      time_since: '5 d',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
