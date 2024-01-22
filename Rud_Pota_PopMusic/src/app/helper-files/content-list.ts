import { Content } from "./content-interface";

export class ContentList {
    private array: Content[];

    constructor() {
    this.array = [];
    }

    get content(): Content[]{
        return this.array;}

    add(newcon: Content): void {
    this.array.push(newcon);
    }

    num(): number {
        return this.array.length;
    }

    Final(index: number): string {
        const contentItem = this.array[index];
        var numOfItems = this.num();
        var title = contentItem.title;
            var description = contentItem.description;
            var imgURL = contentItem.imgURL;
            var creator = contentItem.creator;
            var type = contentItem.type;
            var tags = contentItem.tags;
            var imgTag = imgURL ? `<img src="${imgURL}" alt="${title}">` : '';
        
            return `<div> <h3>${title}</h3> <p>${description}</p> 
            <p>Creator: ${creator}</p> 
            ${imgTag} <p>Type: ${type}</p> 
            <p> Tags: ${tags} </p> </div><hr/>`;
        }
    }