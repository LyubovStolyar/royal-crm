import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome';
  inputType = 'text';

  night = true;
  items = ['orange', 'banana', 'apple', 'cherry']
  // labels= ['Customers', 'Products', 'Orders']

 

  isItNight(){
    return this.night;
  }
}
