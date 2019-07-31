import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children: RouteInfo[];
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: '', class: '',
      children: [
        { path: '/dashboard/:gua', title: 'GUA',  icon: 'view_module', class: '', children: [] },
        { path: '/dashboard/:connect', title: 'Connect',  icon: 'view_module', class: '', children: [] },
        { path: '/dashboard/:hrbo', title: 'HRB Online',  icon: 'view_module', class: '', children: [] },
        { path: '/dashboard/:financialservices', title: 'Financial Services',  icon: 'view_module', class: '', children: [] },
        { path: '/dashboard/:salesforce', title: 'Salesforce',  icon: 'view_module', class: '' , children: []}
      ]},
    { path: '/manage', title: 'Manage',  icon: '', class: '',
      children: [
        { path: '/myactivities', title: 'My Activities',  icon: 'local_activity', class: '', children: [] },
        { path: '/accountsettings', title: 'Account Settings',  icon: 'account_box', class: '', children: [] },
        { path: '/contactadmin', title: 'Contact C.A.T Admin',  icon: 'contact_support', class: '', children: [] }
      ]},

];
@Component({
  selector: 'cat-sidebar',
  templateUrl: './cat-sidebar.component.html',
  styleUrls: ['./cat-sidebar.component.css']
})
export class CatSidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
