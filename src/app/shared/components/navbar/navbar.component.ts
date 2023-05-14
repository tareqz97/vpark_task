import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  openUserActions: boolean = false;
  showNotificationBox: boolean = false;
  showLangBox: boolean = false;

  ngOnInit(): void {
  }

}
