import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TweetItem } from './tweet-item/tweet-item';
import { Observable } from 'rxjs';
import { map, delay, filter } from 'rxjs/operators';

@Injectable()
export class TweetsService {

  constructor(private http: HttpClient) { }

  getTweets(name: string = 'TwitterName'): Observable<TweetItem[]> {
    return this.http.get('/assets/fake-tweets.json').pipe(
      delay(1000), 
      map(tweets => (tweets as Array<TweetItem>).filter(tweet => tweet.user.screen_name.toLowerCase() === name.toLowerCase()))
    )
  }
}
