import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-s',
  templateUrl: './pipe-s.component.html',
  styleUrls: ['./pipe-s.component.css']
})
export class PipeSComponent {

  toDate=new Date()

  message='Learning Pipes in Angular'

  a: number = 0.259;
}
