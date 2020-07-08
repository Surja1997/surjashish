import { Component, OnInit } from '@angular/core';
import { CovidDetailsService } from '../services/covid-details.service';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public covidCases = [];

  constructor(private covidService: CovidDetailsService) { }

  ngOnInit(): void {
    this.covidService.getDetails()
      .subscribe(data => {
        this.covidCases = data['raw_data']
        
      });
  }

  checkName(name) {
    if (name.toLowerCase() == "sakshi" || name.toLowerCase() == "sakshi mishra") {
      alert("aashu loves you na");
    }
    else {
      alert("whatever xD")
    }
  }





}
