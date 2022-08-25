import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // Properties.
  navlist = [
    {
      name: 'Home',
      icon: 'home',
    },
    {
      name: 'Transfer',
      icon: 'transfer',
    },
    {
      name: 'History',
      icon: 'history',
    },
    {
      name: 'Profile',
      icon: 'profile',
    },
    {
      name: 'Settings',
      icon: 'settings',
    },
    {
      name: 'Billing',
      icon: 'billing',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
