import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.page.html',
  styleUrls: ['./compass.page.scss'],
})
export class CompassPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  backHome() {
    this.router.navigateByUrl('/tabnav/home');
  }
}
