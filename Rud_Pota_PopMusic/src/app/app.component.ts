import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from "./content-card/content-card.component";
import { ContentListComponent } from "./content-list/content-list.component";
import { HoverAffectDirective } from './hover-affect.directive';
import { PopServiceService } from './pop-service.service';
import { AppMessagesComponent } from './app-messages/app-messages.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ContentCardComponent, ContentListComponent, HoverAffectDirective, AppMessagesComponent]
})
export class AppComponent implements OnInit {
  title = 'Pop Music by Rudri';
  singleContentItem: any;

  constructor(private PopService: PopServiceService) {}
  ngOnInit(): void {
    this.loadSingleContentItem();
  }

  loadSingleContentItem() {
    const idOfContentItemToLoad = 1; // Replace with the desired ID
    this.PopService.getContentItemById(idOfContentItemToLoad).subscribe((data) => {
      this.singleContentItem = data;
      console.log(`Content Item at id: ${idOfContentItemToLoad}`);
    });
  }
}
