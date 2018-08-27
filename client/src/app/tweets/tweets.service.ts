import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TweetItem } from './tweet-item/tweet-item';
import { Observable, from, of } from 'rxjs';
import { map, delay, filter, take, skip, switchMap, mergeMap, concatMap, toArray, flatMap, catchError } from 'rxjs/operators';
import { TWEETS_LIMIT } from './tweets.constant';

const ENDPOINT = 'http://localhost:3000/1.1';

@Injectable()
export class TweetsService {

  constructor(private http: HttpClient) { }

  getTweets(name: string, lastId = -1, count: number = TWEETS_LIMIT): Observable<TweetItem[]> {
    let params = new HttpParams()
      .append('count', count.toString())
      .append('screen_name', name);
      
    if(lastId !== -1) {
      params = params.append('max_id', lastId.toString());
    }
    
    return this.http.get(`${ENDPOINT}/statuses/user_timeline.json`, { params })
      .pipe(
        // delay(1000),
        catchError(err => of([])),
        map(response => response as Array<TweetItem>)
      );
  }
}
