import { Component } from '@angular/core';
import { ServicesService } from './services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project';
  dates : string[] = [];
  persons : string[] = [];
  diseases : string[] = [];
  quantity : string[] = [];
  drugs : string[] = [];


  constructor(private service: ServicesService) {}
  makecall(text: any) {
    console.log('jola', text);
    let response;
    this.service.getcall(text).subscribe((data:any) => {
      response = data;
      console.log(response)
      this.dates = response['date']
      this.persons = response['persons']
      this.drugs = response['drugs']
      this.diseases = response['diseases']
      this.quantity = response['quantity']
      // console.log(this.date)
    });
    console.log(response);
    // this.postcall(text)
  }
}
