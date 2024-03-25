import { Component, OnInit } from '@angular/core';
import { PopServiceService } from './pop-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // imports: [CommonModule, RouterOutlet, ContentCardComponent, ContentListComponent, HoverAffectDirective, AppMessagesComponent]
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
