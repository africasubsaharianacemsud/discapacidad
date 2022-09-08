import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private onLoad: boolean = false;
  public counter: number = 0;

  constructor(private router: Router) {
    const firebaseConfig = {
      databaseURL: 'https://discapacidad-b4f9b-default-rtdb.firebaseio.com'
    }

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const counter = ref(database, 'count/');
    onValue(counter, (snapshot) => {
      const data = snapshot.val();
      this.counter = data
      if(!this.onLoad) {
        this.onLoad = !this.onLoad;
        this.writeCounterData()
      }
    });
  }

  ngOnInit(): void {
  }

  private writeCounterData = () => {
    const db = getDatabase();
    set(ref(db, 'count/'), this.counter + 1);
  }

  public navigateTo = (url: String) => {
    this.router.navigate([url]);
  }
}
