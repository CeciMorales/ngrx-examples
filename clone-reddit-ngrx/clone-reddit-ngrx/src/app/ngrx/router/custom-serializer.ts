import { RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";
import { RouterStateUrl } from "src/app/models/RouterStateUrl.interface";

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        
        // routerStateSnapshot es lo que hay en el state de router
        let route = routerState.root;

        // looping over first child
        while (route.firstChild) {
        route = route.firstChild;
        }

        const {
        url,
        root: { queryParams },
        } = routerState;
        const { params } = route;

        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams };
        
    }
}