import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkName(name)
  {
    if(name.toLowerCase()=="sakshi")
    {
      alert("aashu loves you na");
    }
    else
    {
      alert("alright!")
    }
  }
}
