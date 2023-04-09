import { Component, Input } from '@angular/core';
import { IImage } from 'src/app/models/image';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() image: IImage;

  isLiked: boolean = false;
}
