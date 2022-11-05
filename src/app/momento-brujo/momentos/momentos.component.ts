import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.component.html',
  styleUrls: ['./momentos.component.scss']
})
export class MomentosComponent implements OnInit {
  Arr = Array;

  constructor() { }

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
    const floatPos = (slick!.scrollWidth / 9) * data;
    slick!.scrollLeft = floatPos;
  }
}
