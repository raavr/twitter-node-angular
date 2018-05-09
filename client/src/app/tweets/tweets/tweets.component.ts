import { Component, OnInit, OnDestroy } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { TweetItem } from '../tweet-item/tweet-item';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { TWEETS_LIMIT } from '../tweets.constant';

interface SearchObject {
  searchText: string;
  offset: number;
}

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit, OnDestroy {

  tweets: TweetItem[];
  placeholderTweets: number[];
  
  private searchText$ = new Subject<SearchObject>();
  private unsubscribe$ = new Subject();
  
  lastSearchText = '';
  totalTweets = 0;

  constructor(private tweetsService: TweetsService) { }

  private setPlaceholderTweets() {
    this.placeholderTweets = Array.from({length: TWEETS_LIMIT}, (e, i) => i++);
  }

  search(value: string) {
    this.tweets = null;
    this.setPlaceholderTweets();
    this.searchText$.next({ searchText: value, offset: -1});
  }

  loadMoreTweets(offset) {
    this.setPlaceholderTweets();
    this.searchText$.next({ searchText: this.lastSearchText, offset });
  }

  private isLoadingByScrollEvent(searchText: string) {
    return this.lastSearchText === searchText;
  }

  private onLoadComplete(st: (SearchObject | TweetItem[])[]) {
    const searchText = (st[0] as SearchObject).searchText;
    const newTweets = st[1] as Array<TweetItem>;
    
    if(this.isLoadingByScrollEvent(searchText)) {
      this.tweets = [...this.tweets, ...newTweets];
    } else {
      this.tweets = newTweets;
      this.totalTweets = newTweets.length ? newTweets[1].user.statuses_count : 0;
    }

    this.placeholderTweets = [];
    this.lastSearchText = searchText;
  }

  ngOnInit() {
    this.searchText$.asObservable()
      .pipe(
        switchMap(
          (search: SearchObject) => this.tweetsService.getTweets(search.searchText, search.offset), (search, tweets) => [search, tweets]
        ),
        takeUntil(this.unsubscribe$)
      ).subscribe(searchObjWithTweets => this.onLoadComplete(searchObjWithTweets));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
