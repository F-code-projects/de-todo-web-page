import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
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
export class AppComponent  implements OnInit {
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

  constructor(private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }

} 
