import { Component, OnInit } from '@angular/core';
declare let AOS: any;
@Component({
  selector: 'app-infografia',
  templateUrl: './infografia.component.html',
  styleUrls: ['./infografia.component.scss']
})
export class InfografiaComponent implements OnInit {

  constructor() {
    console.log(AOS); // loaded script
   }

  ngOnInit(): void {
    AOS.init();
  }

}
