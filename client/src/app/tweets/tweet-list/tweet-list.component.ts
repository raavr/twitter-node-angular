import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { TweetItem } from '../tweet-item/tweet-item';
import { TWEETS_LIMIT } from '../tweets.constant';
import { of } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent {

  @Input() tweets: TweetItem[];
  @Input() placeholderTweets: number[];
  @Input() totalTweets: number;
  @Output() loadMoreTweets = new EventEmitter<number>();

  scrollCallback;

  constructor() { 
    this.scrollCallback = this.load.bind(this);
  }

  private shouldLoadMore() {
    if(!this.tweets) {
      return false;
    }

    return this.tweets.length < this.totalTweets;
  }

  load() {
    return of(null).pipe(
      tap(() => {
        if(this.shouldLoadMore()) {
          const lastId = this.tweets[this.tweets.length-1].id;
          this.loadMoreTweets.emit(lastId);
        }
      }
    ));
  }

}
