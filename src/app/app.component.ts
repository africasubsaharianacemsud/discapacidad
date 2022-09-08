import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'disacpacidad';
  public isToolbarHiden: boolean = false;

  constructor(private translate: TranslateService) {
    if(!document.cookie.includes('lang')) {
      document.cookie = "lang=en"
      window.location.href = '/'
    } else {
      const startLang = document.cookie.indexOf("lang") + 5
      const endLang = startLang + 2
      const lang = document.cookie.substring(startLang, endLang);
      this.setAppLanguage(lang);
    }
  }

  public setAppLanguage = (lang: string) => {
    this.translate.setDefaultLang(lang);
    // this.translate.use(this.translate.getBrowserLang()!);
  }

  public hideToolbar = (e: Event) => {
    // console.log(this.hideToolbar)
    const element: HTMLInputElement = e.target as HTMLInputElement;
    const className: string = element.className;
    if(window.innerWidth <= 765) {
      if(!className.includes('tb') && !className.includes('hamburguer')) {
        this.isToolbarHiden = true;
      }
    }
  }

  public showToolbar = (isHidden: boolean) =>  {
    this.isToolbarHiden = isHidden;
  }
}
