import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngstyle',
  imports: [NgStyle, FormsModule],
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.css',
})
export class NgstyleComponent {
  divOneColor: string = 'hotpink';
  divTwoColor: string = 'orange';
  textColor: string = 'black';
  isChecked: boolean = false;
  myCss: any = {
    'background-color': 'teal',
    color: 'white',
    width: '200px',
  };
  setDivOneColor(color: string) {
    this.divOneColor = color;
  }
  setDivTwoColor(color: string) {
    this.divTwoColor = color;
  }
}
