import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imgSource = '';
  @Input() altImg = '';
  @Input() day = '';
  @Input() title = '';
  @Input() description = '';
  @Input() event = '';
  @Input() eventBn = '';
  @Input() visible: boolean = true;
  @Input() calendar: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public changeLocation = () => {
    location.href = this.event;
  }
}
