import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePickerModule,
    SelectModule,
    FormsModule,
    CommonModule,
    DialogModule,
    ButtonModule,
    HeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  animations: any[] | undefined;
  animation: any;
  dynamicAnimationClasses:
    | string
    | string[]
    | Set<string>
    | { [klass: string]: any }
    | null
    | undefined;
  showDialog() {
    throw new Error('Method not implemented.');
  }
  closeDialog() {
    throw new Error('Method not implemented.');
  }
  title = 'de-todo-web-page';
}
