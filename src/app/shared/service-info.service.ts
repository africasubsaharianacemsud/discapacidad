import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceInfoService {
  public title!: string;
  public description!: string;
  public imgSource!: string;
  public altImg!: string;
  public iconSource!: string;
  public disability!: string;

  constructor() { }

  clearService = () => {
    this.title = '';
    this.description = '';
    this.imgSource = '';
    this.altImg = '';
    this.iconSource = '';
    this.iconSource = '';
    this.disability = '';
  }

  isServiceClear = (): Boolean => {
    if(this.title && this.description &&
    this.imgSource && this.altImg &&
    this.iconSource && this.disability)
      return false;
    else
      return true;
  }
}
