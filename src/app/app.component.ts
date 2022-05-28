import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';

  nameArray = 
  [{name: 'Arrivals'}, 
  {name: 'In-house'},
  {name: 'Departure'},
  {name: 'Notification'},
  {name: 'Message'},
  {name: 'Booking-Status'},
  {name: 'Reservation'}]

  
}
