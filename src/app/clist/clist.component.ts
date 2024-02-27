import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css']
})
export class ClistComponent {
 cars:string[]=[];

addcar(carsdata:string[]){
this.cars=carsdata
}

}
