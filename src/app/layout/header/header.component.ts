import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ItemsPageComponent } from "../../features/items/pages/items.page.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    BadgeModule,
    OverlayBadgeModule,
    ItemsPageComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
}
}
