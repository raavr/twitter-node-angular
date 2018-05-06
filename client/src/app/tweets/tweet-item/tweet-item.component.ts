import { Component, OnInit, Input } from '@angular/core';
import { TweetItem } from './tweet-item';

@Component({
  selector: 'app-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss']
})
export class TweetItemComponent implements OnInit {

  @Input() item: TweetItem;
  constructor() { }

  ngOnInit() {
  }

}
