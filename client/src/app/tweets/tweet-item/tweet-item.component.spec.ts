import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetItemComponent } from './tweet-item.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { TweetItem } from './tweet-item';

const fakeTweet: TweetItem = {
  "id": 1,
  "text": "Example text",
  "created_at": "Mon May 10 04:28:30 +0000 2018",
  "user": {
      "name": "John Doe",
      "screen_name": "JohnDoe",
      "profile_image_url": "https://example.com/example.jpg",
      "statuses_count": 1
  }
}

describe('TweetItemComponent', () => {
  let component: TweetItemComponent;
  let fixture: ComponentFixture<TweetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetItemComponent ],
      imports: [ CustomMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetItemComponent);
    component = fixture.componentInstance;
    component.item = fakeTweet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
