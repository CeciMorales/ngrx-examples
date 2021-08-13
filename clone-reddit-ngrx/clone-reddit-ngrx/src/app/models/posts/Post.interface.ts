
export class Post {
    id?: string
    title!: string
    hashtags?: Array<string>
    description!: string
    image?: string
    author?: string
    likes?: Array<string>
    dislikes?: Array<string>
    comments?: Array<string>
    creationDate?: Date

    constructor(initialValues: Partial<Post> = {}) {
        Object.assign(this, initialValues);
    }

    
}