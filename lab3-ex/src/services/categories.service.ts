import type { AxiosInstance } from "axios";
import type { Category } from "@/types";
import type { Readable } from "@/services/types";
import { CategoryModel } from "@/models/category.model";

export class CategoriesService implements Readable<Category> {

    constructor(public httpClient: AxiosInstance) {
    }

    /**
     * Get categories
     * @param params
     */
    async get(params: any): Promise<Category[]> {
        const response = await this.httpClient.get<Category[]>('/categories', { params });
        return response.data.map((category) => new CategoryModel(category));
    }

    /**
     * Get category by id
     * @param id
     */
    async getById(id: number): Promise<Category> {
        const response = await this.httpClient.get<Category>('/categories', { params: { id } });
        return new CategoryModel(response.data);
    }

    /**
     * Create a new category
     * @param data
     */
    async create(data: Category): Promise<Category> {
        const response = await this.httpClient.post<Category>('/categories', data);
        return new CategoryModel(response.data);
    }

    /**
     * Update a category
     * @param id
     * @param data
     */
    async update(id: number, data: Category): Promise<Category> {
        const response = await this.httpClient.put<Category>(`/categories/${id}`, data);
        return new CategoryModel(response.data);
    }

    /**
     * Delete a category
     * @param id
     */
    async delete(id: number): Promise<Category> {
        const response = await this.httpClient.delete<Category>(`/categories/${id}`);
        return new CategoryModel(response.data);
    }
}
