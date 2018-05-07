export interface TweetItem {
    text: string;
    created_at: string;
    user: User;
}

interface User {
    name: string;
    screen_name: string;
    profile_image_url: string;
}