export interface TweetItem {
    text: string;
    user: User;
}

interface User {
    name: string;
    profile_image_url: string;
}