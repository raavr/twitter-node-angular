import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { RouterModule } from '@angular/router';
import { TweetsRoutes } from './tweets.route';
import { CustomMaterialModule } from '../custom-material';
import { TweetItemComponent } from './tweet-item/tweet-item.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetsService } from './tweets.service';
import { TweetItemPlaceholderComponent } from './tweet-item/tweet-item-placeholder/tweet-item-placeholder.component';
import { TweetSearchComponent } from './tweet-search/tweet-search.component';
import { InfiniteScrollerDirective } from './tweet-list/infinite-scroller.directive';
import { TweetsRoutingModule } from './tweets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TweetsRoutingModule,
    CustomMaterialModule
  ],
  declarations: [
    TweetListComponent, 
    TweetItemComponent, 
    TweetsComponent, 
    TweetItemPlaceholderComponent, 
    TweetSearchComponent, 
    InfiniteScrollerDirective
  ],
  providers: [
    TweetsService
  ]
})
export class TweetsModule { 
  
}
