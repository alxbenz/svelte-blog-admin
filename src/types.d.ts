export interface Post {
    _id: number;
    title: string;
    slug: string;
    published: boolean;
    content: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}