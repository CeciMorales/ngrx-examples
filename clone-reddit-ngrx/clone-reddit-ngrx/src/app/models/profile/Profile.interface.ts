import { Post } from "../posts/Post.interface";

export interface Profile {
    id: string,
    type: string,
    firstName: string,
    lastName: string,
    username: string,
    description: string,
    profileImage: string,
    coverImage: string,
    followers: string[],
    following: string[],
    savedPosts: Post[]

}