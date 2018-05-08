import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TweetItem } from './tweet-item/tweet-item';
import { Observable, from } from 'rxjs';
import { map, delay, filter, take, skip, switchMap, mergeMap, concatMap, toArray, flatMap } from 'rxjs/operators';

@Injectable()
export class TweetsService {

  constructor(private http: HttpClient) { }

  getTweets(name: string = 'TwitterName', offset = 0): Observable<TweetItem[]> {
    return this.http.get('/assets/fake-tweets.json').pipe(
      delay(1000), 
      flatMap(tweets => from(tweets as Array<TweetItem>)),
      filter(tweet => tweet.user.screen_name.toLowerCase() === name.toLowerCase()),
      skip(offset),
      take(3),
      toArray()
    )
  }
}
