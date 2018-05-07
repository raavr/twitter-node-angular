import { Component, OnInit, Input } from '@angular/core';
import { TweetItem } from '../tweet-item/tweet-item';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

  @Input() tweets: TweetItem[];
  constructor() { }

  ngOnInit() {
  }

}
