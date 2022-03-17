import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'disacpacidad';

  constructor(private translate: TranslateService) {
    if(!document.cookie.includes('lang')) {
      document.cookie = "lang=en"
      window.location.href = '/'
    } else {
      const lang = document.cookie.substring(5, 7);
      this.setAppLanguage(lang);
    }
  }

  public setAppLanguage = (lang: string) => {
    this.translate.setDefaultLang(lang);
    // this.translate.use(this.translate.getBrowserLang()!);
  }
}
