import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $translate: function;
    }
}
export interface Category {
    id: number
    name: string
    image: string
}

