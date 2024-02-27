import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  cars:string[]=[] //cars is an string array
  carname='';
  addcar(){
    this.cars.push(this.carname)
    this.carname=" ";
    console.log(this.cars);
  }

}
