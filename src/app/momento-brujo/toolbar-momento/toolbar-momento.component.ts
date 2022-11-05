import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar-momento',
  templateUrl: './toolbar-momento.component.html',
  styleUrls: ['./toolbar-momento.component.scss']
})
export class ToolbarMomentoComponent implements OnInit {
  @Input() hideToolbar!: boolean;
  @Output() hideToolbarToParent = new EventEmitter<boolean>();

  constructor(
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(window.innerWidth <= 765) {
      this.hideToolbar = true;
    }
  }

  public openToolbar = () => {
    this.hideToolbar = false;
    this.hideToolbarToParent.emit(this.hideToolbar);
  }

  public changeLanguage = () => {
    let oldLang = this.translate.defaultLang
    let lang = ''
    if(oldLang == 'en')
      lang = 'es'
    else
      lang = 'en'
    this.translate.setDefaultLang(lang);
    let newCookies = document.cookie.replace('lang=' + oldLang, 'lang=' + lang)
    document.cookie = newCookies
  }

  public navigateTo = (url: String) => {
    this.router.navigate([url]);

    if(window.innerWidth <= 765) {
      this.hideToolbar = true;
    }
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number): void {
    if(width > 765)
      this.hideToolbar = false;
    else
      this.hideToolbar = true;
  }
}
