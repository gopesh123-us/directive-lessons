import { Component } from '@angular/core';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';

@Component({
  selector: 'app-root',
  imports: [NgstyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directive-lessons';
}
