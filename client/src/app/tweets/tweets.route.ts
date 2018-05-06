import { Routes } from '@angular/router';
import { TweetsComponent } from './tweets/tweets.component';

export const TweetsRoutes: Routes = [
    {
        path: '',
        redirectTo: 'tweets',
        pathMatch: 'full'
    },
    {
        path: 'tweets',
        component: TweetsComponent
    }
];