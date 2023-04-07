import { Component, OnInit } from '@angular/core';
import { IImage } from './models/image';
import { ImagesService } from './services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'picture-pick';
  images: IImage[] = [];

  constructor(private imagesService: ImagesService) {}


  ngOnInit(): void {
    this.imagesService.getAll().subscribe(images => this.images = images)
  }
}
