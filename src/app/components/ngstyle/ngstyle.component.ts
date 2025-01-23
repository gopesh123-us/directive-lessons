import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  imports: [NgStyle],
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.css',
})
export class NgstyleComponent {
  divOneColor: string = 'hotpink';
  divTwoColor: string = 'orange';
  textColor: string = 'black';
  setDivOneColor(color: string) {
    this.divOneColor = color;
  }
  setDivTwoColor(color: string) {
    this.divTwoColor = color;
  }
}
