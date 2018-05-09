import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetItemPlaceholderComponent } from './tweet-item-placeholder.component';
import { CustomMaterialModule } from '../../../custom-material/custom-material.module';

describe('TweetItemPlaceholderComponent', () => {
  let component: TweetItemPlaceholderComponent;
  let fixture: ComponentFixture<TweetItemPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetItemPlaceholderComponent ],
      imports: [ CustomMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetItemPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
