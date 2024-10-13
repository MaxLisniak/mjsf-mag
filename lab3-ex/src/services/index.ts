import { CategoriesService } from "@/services/categories.service";

import httpClient from "@/utils/http-client";
import { ProductService } from "./products.service";
import { UserService } from "./users.service";


class ServiceProvider {
    /**
     * Service instances
     */
    serviceInstances: Record<string, any> = {};

    /**
     * Get cruise service
     */
    getCategoriesService(): CategoriesService {
        if (!this.serviceInstances.cruiseService) {
            this.serviceInstances.cruiseService = new CategoriesService(httpClient);
        }
        return this.serviceInstances.cruiseService;
    }

    getProductService(): ProductService {
        if (!this.serviceInstances.productService) {
            this.serviceInstances.productService = new ProductService(httpClient);
        }
        return this.serviceInstances.productService;
    }

    getUserService(): UserService {
        if (!this.serviceInstances.userService) {
            this.serviceInstances.userService = new UserService(httpClient);
        }
        return this.serviceInstances.userService;
    }

    /**
     * Set service instance
     * @param serviceName
     * @param serviceInstance
     */
    setServiceInstance(serviceName: string, serviceInstance: any): void {
        this.serviceInstances[serviceName] = serviceInstance;
    }

    /**
     * Check if service instance exists
     * @param serviceName
     */
    hasServiceInstance(serviceName: string): boolean {
        return !!this.serviceInstances[serviceName];
    }
}

const serviceProvider: ServiceProvider = new ServiceProvider();
export default serviceProvider;
