import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsComponent } from './tweets.component';
import { TweetsService } from '../tweets.service';
import { TweetItem } from '../tweet-item/tweet-item';
import { Observable, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const fakeTweets: TweetItem[] = [
  {
    "id": 1,
    "text": "Example text",
    "created_at": "Mon May 10 04:28:30 +0000 2018",
    "user": {
        "name": "John Doe",
        "screen_name": "JohnDoe",
        "profile_image_url": "https://example.com/example.jpg",
        "statuses_count": 2
    }
  },
  {
    "id": 2,
    "text": "Sample text",
    "created_at": "Mon May 11 04:28:30 +0000 2018",
    "user": {
        "name": "John Doe",
        "screen_name": "JohnDoe",
        "profile_image_url": "https://example.com/example.jpg",
        "statuses_count": 2
    }
  }
];

class TweetsServiceStub {
  getTweets(): Observable<TweetItem[]> {
    return of(fakeTweets);
  }
}

describe('TweetsComponent', () => {
  let component: TweetsComponent;
  let fixture: ComponentFixture<TweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsComponent ],
      providers:    [ {provide: TweetsService, useValue: TweetsServiceStub } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
