import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  constructor(private router: Router) {}

  imgs = [
    {
      img: 'assets/img/image 2.png',
    },
    {
      img: 'assets/img/image 3.png',
    },
    {
      img: 'assets/img/image 4.png',
    },
    {
      img: 'assets/img/image 5.png',
    },
    {
      img: 'assets/img/image 2.png',
    },
  ];
  ngOnInit() {}

  backHome() {
    this.router.navigateByUrl('tabnav/home');
  }
}
