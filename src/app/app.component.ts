import { Component } from '@angular/core';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';

@Component({
  selector: 'app-root',
  imports: [NgstyleComponent, NgclassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directive-lessons';
}
