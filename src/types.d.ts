export interface PostResponse extends Post {
    _id: string;
    createdAt: string;
    updatedAt: string;
}

export interface Post {
    title: string;
    slug: string;
    published: boolean;
    content: string;
    tags?: string[];
}