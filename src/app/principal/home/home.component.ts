import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title!: string;
  public description!: string;
  public img!: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  public carouselPos = (e: Event): void => {
    const element: HTMLElement = e.target as HTMLElement;
    const solid: HTMLElement = document.querySelector('.fa-solid.fa-circle')!;
    if (element.className.includes('fa-solid'))
      return;
    solid.classList.remove('fa-solid')
    solid.classList.add('fa-regular')
    element.classList.remove('fa-regular')
    element.classList.add('fa-solid')
    this.changeSlick(element);
  }

  changeSlick = (element: HTMLElement) => {
    const slick = element.closest('.carousel_position')!.previousElementSibling as HTMLElement;
    const data: number = parseInt(element.getAttribute('data')!);
    const floatPos = (slick!.scrollWidth / 3) * data;
    slick!.scrollLeft = floatPos;
  }

  showModal = (e: Event) => {
    const element: HTMLElement = e.target as HTMLElement;
    const data: string = element.getAttribute('data')!;
    const keyTitle: string = `icons.${data}.title`;
    const keyDescription: string = `icons.${data}.description`;
    const keyImg: string = `icons.${data}.img`;
    const title = this.translate.instant(keyTitle);
    const description = this.translate.instant(keyDescription);
    const img = this.translate.instant(keyImg);
    this.title = title;
    this.description = description
    this.img = img
    const modal: HTMLElement = document.querySelector('.icons_modal')! as HTMLElement;
    modal.style.display = 'flex';
  }

  closeModal = () => {
    const modal: HTMLElement = document.querySelector('.icons_modal')! as HTMLElement;
    modal.style.display = 'none';
  }
}
