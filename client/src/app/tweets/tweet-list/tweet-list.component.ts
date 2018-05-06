import { Component, OnInit } from '@angular/core';
import { TweetItem } from '../tweet-item/tweet-item';

const SAMPLE_TWEETS: TweetItem[] = [
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    user: {
      name: 'Twitter Name',
      profile_image_url: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    }
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    user: {
      name: 'John Doe',
      profile_image_url: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    }
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    user: {
      name: 'Greg Newman',
      profile_image_url: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    }
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    user: {
      name: 'Steve Oldman',
      profile_image_url: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    }
  }
]


@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

  tweets: TweetItem[] = SAMPLE_TWEETS;
  constructor() { }

  ngOnInit() {
  }

}
