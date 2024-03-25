import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { PopServiceService } from '../pop-service.service';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [] as string[]
  };
  tagsString: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private PopService: PopServiceService) {}

  addNewContent() {
    this.newContent.tags = this.tagsString.split(',');

    this.PopService.addContent(this.newContent).subscribe((newContentWithId) => {
      // this.contentAdded.emit(newContentWithId); 
      this.clearFields(); 
    });
  }

  clearFields() {
    this.newContent = {
      id: null,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    };
    this.tagsString = '';
  }
}