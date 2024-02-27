
import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @Output() CaresAdded:EventEmitter<string[]> = new EventEmitter;
  cars:string[]=[] //cars is an string array
  carname='';
  addcar(){
    this.cars.push(this.carname)
    this.carname=" ";
    console.log(this.cars);
    this.CaresAdded.emit(this.cars);
  }

}
