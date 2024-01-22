import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
  contentList:ContentList;
  constructor(){
    this.contentList = new ContentList();

    this.contentList.add({
      id: 1,
      title: 'Midnights',
      description: 'Midnights is the tenth studio album by Taylor Swift, released on October 21, 2022, by Republic Records. She conceived it as a concept album about nocturnal ruminations inspired by her sleepless nights. I just ADORE this album a lot. My favorite track is Masterpiece and I am going to get a tattoo of it!',
      creator: 'Taylor Swift',
      imgURL: 'ts.png',
      type: 'Pop',
      tags: ["Indie","Dream-pop","Dance"],
    });

    this.contentList.add({
      id: 2,
      title: 'Romance',
      description: 'Romance is the second studio album by Cuban-American singer and songwriter Camila Cabello. It was released on December 6, 2019. This album is so special because it encorporates the whole experience of falling in love and getting out of it. My favourite song from this album is First Man.',
      creator: 'Camila Cabello',
      imgURL: 'cc.png',
      type: 'Pop',
      tags: ["R&B","Rock","Latin"],
    });

    this.contentList.add({
      id: 3,
      title: 'Eternal Sunshine',
      description: 'Eternal Sunshine is the upcoming seventh studio album by American singer Ariana Grande. It is scheduled to be released on March 8, 2024 and I am super excited for it. She has released one track called "Yes, and?" and its already a chart topper. She is going to explore different themes this time and I am here for it.',
      creator: 'Ariana Grande',
      imgURL: 'ag.png',
      type: 'Pop',
      tags: ["Soul Music","Indie Rock","R&B"],
    });
}
}
