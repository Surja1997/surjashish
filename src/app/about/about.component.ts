import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  height: any;

  ngOnInit(): void {
    var w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var h = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
    console.log("sds" + w)
    this.height=h;
  }

}
