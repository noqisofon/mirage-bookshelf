export interface Post {
    title: string;
    date: Date | null;
    description: string;
    slug: string;
    tags?: string[];
}

export interface PostModule {
    metadata: Post;
    default?: any;
}
