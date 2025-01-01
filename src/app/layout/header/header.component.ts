import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    BadgeModule,
    OverlayBadgeModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
