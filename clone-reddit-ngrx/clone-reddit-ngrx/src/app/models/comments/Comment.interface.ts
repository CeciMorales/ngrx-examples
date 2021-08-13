export interface Comment {
    id?: string,
    author: string,
    description: string,
    likes?: string[],
    dislikes?: string[],
    creationDate?: Date
}
