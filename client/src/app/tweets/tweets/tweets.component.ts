import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { TweetItem } from '../tweet-item/tweet-item';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  tweets: TweetItem[];
  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
    this.tweetsService.getTweets().subscribe(data => this.tweets = data);
  }

}
