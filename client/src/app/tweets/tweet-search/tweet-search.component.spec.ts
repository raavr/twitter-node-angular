import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TweetSearchComponent } from './tweet-search.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TweetSearchComponent', () => {
  let component: TweetSearchComponent;
  let fixture: ComponentFixture<TweetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetSearchComponent ],
      imports: [ BrowserAnimationsModule, CustomMaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
