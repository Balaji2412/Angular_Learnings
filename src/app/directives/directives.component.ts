import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  About='List of movies - ng for condition';
  num = '0';
  names = '';
  SelectValue='';
  Movies = [
    { Name: 'Vadachennai', Director: 'Vetrimaran', Actor: 'Dhanush' },
    { Name: 'Kaithe', Director: 'Lokesh', Actor: 'Karthi' },
    { Name: 'Leo', Director: 'Lokesh Kanagaraj', Actor: 'Vijay' },
    {
      Name: 'HeyRam',
      Director: 'Kamal Hassan',
      Actor: 'Kamal Hassan,Sharuk Khan',
    },
    {
      Name: 'Super Delux',
      Director: 'Thayagaraja Kumar raja',
      Actor: 'Mishkin,Vijay sadhupathi',
    },
  ];

  showchecked=" ";




}
