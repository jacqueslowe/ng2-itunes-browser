import {Component} from '@angular/core';
import {Image} from './image.interface';

@Component({
    selector: 'carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
//Carousel Component itself
export class CarouselComponent {
  public images = IMAGES;
}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { "title": "Carey Price", "url": "https://nhl.bamcontent.com/images/photos/290273742/1024x576/cut.jpg" },
  { "title": "Patrick Marleau", "url": "https://nhl.bamcontent.com/images/photos/290277518/1024x576/cut.jpg" },
  { "title": "Golden Knights", "url": "https://nhl.bamcontent.com/images/photos/290064926/1024x576/cut.jpg" },
  { "title": "Marc-Andre Fleury", "url": "https://nhl.bamcontent.com/images/photos/290058062/1024x576/cut.jpg" },
  { "title": "James Neal", "url": "https://nhl.bamcontent.com/images/photos/290056444/1136x640/cut.jpg" } 
];