import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fullCalendar';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBZm-2xEF2R4KVMcbbMPL4aEAZxUKoRfiA",
      authDomain: "calendar-40271.firebaseapp.com",
      databaseURL: "https://calendar-40271.firebaseio.com",
      projectId: "calendar-40271",
      storageBucket: "calendar-40271.appspot.com",
      messagingSenderId: "71038678611",
      appId: "1:71038678611:web:f21f6b50f27c4e59"
    };
    firebase.initializeApp(firebaseConfig);
  }

  ngOnInit() {}

}
