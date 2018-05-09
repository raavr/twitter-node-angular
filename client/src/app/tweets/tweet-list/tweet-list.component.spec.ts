import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TweetListComponent } from './tweet-list.component';
import { TweetItem } from '../tweet-item/tweet-item';

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
]
describe('TweetListComponent', () => {
  let component: TweetListComponent;
  let fixture: ComponentFixture<TweetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListComponent);
    component = fixture.componentInstance;
    component.tweets = fakeTweets;
    component.placeholderTweets = [1,2,3];
    component.totalTweets = 2;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
