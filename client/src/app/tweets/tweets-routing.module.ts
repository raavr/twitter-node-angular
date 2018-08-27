import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TweetsRoutes } from './tweets.route';

@NgModule({
  imports: [
    RouterModule.forChild(TweetsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class TweetsRoutingModule { 
  
}
