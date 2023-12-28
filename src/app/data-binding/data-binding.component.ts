import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  clickcount=0;
  clickcount1=0;
  isdisabled='';//by default is true
  // You can bind this function in the in the tempelate for event binding.
  increasecount(){
    this.clickcount++;
    if(this.clickcount>0){
      this.isdisabled='false';
    }
  }
  // get value from the tempelate to component from input box
  getvalue='';

  getvalue1='';

  handleinput(e:any){
    // with out type assertion (not good practice because from html template you might get values in any form)
    //this.getvalue=e.target.value;

    //with type assetion
    this.getvalue=(e.target as HTMLInputElement).value //here input elemaent is used because we getting value from an input element in the template
  }

  // two way data binding ,done using [(ngModel)] ,ngModel is available in the forms Module imported in the app.module.ts
  names="";




}
