import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceInfoService } from '../service-info.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imgSource = '';
  @Input() iconSource = '';
  @Input() altImg = '';
  @Input() day = '';
  @Input() title = '';
  @Input() description = '';
  @Input() event = '';
  @Input() eventBn = '';
  @Input() visible: boolean = true;
  @Input() calendar: string[] = [];
  @Input() disability!: string;

  constructor(
    private infoService: ServiceInfoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public changeLocation = () => {
    if(this.event) {
      location.href = this.event;
      return
    }
    this.infoService.title = this.title;
    this.infoService.description = this.description;
    this.infoService.imgSource = this.imgSource;
    this.infoService.altImg = this.altImg;
    this.infoService.iconSource = this.iconSource;
    this.infoService.disability = this.disability;
    this.router.navigateByUrl('/seeinfo');
  }
}
