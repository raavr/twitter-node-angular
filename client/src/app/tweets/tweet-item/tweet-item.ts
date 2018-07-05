export interface TweetItem {
  id: number;
  text: string;
  created_at: string;
  user: User;
}

interface User {
  name: string;
  screen_name: string;
  profile_image_url: string;
  statuses_count: number;
}