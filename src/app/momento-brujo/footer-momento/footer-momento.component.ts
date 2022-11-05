import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-momento',
  templateUrl: './footer-momento.component.html',
  styleUrls: ['./footer-momento.component.scss']
})
export class FooterMomentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateTo = (url: String) => {
    this.router.navigate([url]);
  }
}
