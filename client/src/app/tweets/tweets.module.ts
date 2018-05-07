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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TweetsRoutes),
    CustomMaterialModule
  ],
  declarations: [TweetListComponent, TweetItemComponent, TweetsComponent, TweetItemPlaceholderComponent],
  providers: [
    TweetsService
  ]
})
export class TweetsModule { }
