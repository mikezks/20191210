import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello Angular!';
  content = 'Das ist mein neuer Textblock!';

  changeContent(value: string): void {
    this.content = value;
  }
}
