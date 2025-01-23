import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngclass',
  imports: [CommonModule, FormsModule],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css',
})
export class NgclassComponent {
  divOneBgColor: string = 'bg-info';
  isChecked: boolean = false;
  divTwoBgColor: string = 'bg-danger';
  divFiveClassName: string = 'bg-secondary';

  changeDivOne() {
    if (this.divOneBgColor === 'bg-info') {
      this.divOneBgColor = 'bg-dark text-light';
    } else {
      this.divOneBgColor = 'bg-info';
    }
  }
  addDivColor(className: string) {
    this.divOneBgColor = className;
  }
}
