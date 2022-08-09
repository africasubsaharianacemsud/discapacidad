import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ServiceInfoService } from '../shared/service-info.service';

@Component({
  selector: 'app-see-info',
  templateUrl: './see-info.component.html',
  styleUrls: ['./see-info.component.scss']
})
export class SeeInfoComponent implements OnInit {
  public title!: string;
  public description!: string;
  public imgSource!: string;
  public altImg!: string;
  public iconSource!: string;
  public title_icon!: string;
  public description_icon!: string;
  public image_icon!: string;

  constructor(
    private infoService: ServiceInfoService,
    private translate: TranslateService,
    private router: Router
  ) {
    window.scrollTo(0, 0);
    if(infoService.isServiceClear())
      this.router.navigateByUrl('/infographics');
    this.title = this.infoService.title;
    this.description = this.infoService.description;
    this.imgSource = this.infoService.imgSource;
    this.altImg = this.infoService.altImg;
    this.iconSource = this.infoService.iconSource;
    const key = this.infoService.disability;
    const keyTitle = `icons.${key}.title`;
    const keyDescription = `icons.${key}.description`;
    const keyImage = `icons.${key}.img`;
    this.title_icon = this.translate.instant(keyTitle);
    this.description_icon = this.translate.instant(keyDescription);
    this.image_icon = this.translate.instant(keyImage);
    this.infoService.clearService();
  }

  ngOnInit(): void {
  }

  showModal = () => {
    const modal: HTMLElement = document.querySelector('.icons_modal')! as HTMLElement;
    modal.style.display = 'flex';
  }

  closeModal = () => {
    const modal: HTMLElement = document.querySelector('.icons_modal')! as HTMLElement;
    modal.style.display = 'none';
  }

}
