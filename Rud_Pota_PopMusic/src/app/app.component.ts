import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from "./content-card/content-card.component";
import { ContentListComponent } from "./content-list/content-list.component";
import { HoverAffectDirective } from './hover-affect.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ContentCardComponent, ContentListComponent, HoverAffectDirective]
})
export class AppComponent {
  title = 'Pop Music by Rudri';
}
