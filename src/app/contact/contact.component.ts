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

      // Get the input field
var input = document.getElementById("myName");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
  }

  checkName(name) {
    // if (name.toLowerCase() == "sakshi" || name.toLowerCase() == "sakshi mishra") {
    //   alert("aashu loves you na");
    // }
    // else {
    //   alert("whatever xD")
    // }
    alert("Your name is "+name)
  }

  




}
