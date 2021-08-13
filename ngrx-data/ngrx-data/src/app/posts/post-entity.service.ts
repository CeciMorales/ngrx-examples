import { Injectable } from "@angular/core";
import { 
    EntityCollectionServiceBase, 
    EntityCollectionServiceElementsFactory 
} from "@ngrx/data";
import { Post } from "../models/post.model";

@Injectable({
    providedIn: 'root'
})

// * el base service va a tener todos los métodos
export class PostService extends EntityCollectionServiceBase<Post> {
    constructor(
        serviceElementsFactory: EntityCollectionServiceElementsFactory
    ) {
        // elemento post pasarlo 
        super('Post', serviceElementsFactory);
    }
}