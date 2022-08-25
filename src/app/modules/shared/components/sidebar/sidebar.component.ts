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
      path: '/',
    },
    {
      name: 'Transfer',
      icon: 'transfer',
      path: '/transfer',
    },
    {
      name: 'History',
      icon: 'history',
      path: '/history',
    },
    {
      name: 'Profile',
      icon: 'user',
      path: '/profile',
    },
    {
      name: 'Settings',
      icon: 'settings',
      path: '/settings',
    },
    {
      name: 'Billing',
      icon: 'billing',
      path: '/billing',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
