import { Component, OnInit, Input } from '@angular/core';
import { TweetItem } from '../tweet-item/tweet-item';
import { TWEETS_LIMIT } from '../tweets.constant';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

  @Input() tweets: TweetItem[];
  phTweets: Array<number>;
  
  constructor() { 
    this.phTweets = Array.from({length: TWEETS_LIMIT});
  }

  ngOnInit() {
  }

}
