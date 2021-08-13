import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Post: {
        entityDispatcherOptions: {
            // list of options
            // * optimisticalUpdate => automatically got updated without waiting for the http request
            optimisticUpdate: true,

            // * pesimisticUpdate => se espera a la llamada de http para hcer el cambio

            optimisticDelete: false
        }
    },
};


export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
};