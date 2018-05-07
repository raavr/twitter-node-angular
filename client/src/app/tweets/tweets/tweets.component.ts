import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { TweetItem } from '../tweet-item/tweet-item';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  tweets: TweetItem[];
  searchText$ = new Subject<string>();
  constructor(private tweetsService: TweetsService) { }

  search(value) {
    this.tweets = null;
    this.searchText$.next(value);
  }

  ngOnInit() {
    this.searchText$.asObservable()
      .pipe(
        switchMap((name: string) => this.tweetsService.getTweets(name))
      ).subscribe(tweets => this.tweets = tweets);
  }

}
