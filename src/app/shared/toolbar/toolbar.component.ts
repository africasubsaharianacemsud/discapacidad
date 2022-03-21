import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() hideToolbar!: boolean;
  @Output() hideToolbarToParent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth <= 680) {
      this.hideToolbar = true;
    }
  }

  public openToolbar = () => {
    this.hideToolbar = false;
    this.hideToolbarToParent.emit(this.hideToolbar);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number): void {
    if(width > 680)
      this.hideToolbar = false;
    else
      this.hideToolbar = true;
  }
}
