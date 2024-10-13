import type { AxiosInstance } from "axios";
import type { User } from "@/types";
import type { Readable, Createable, Updateable, Deleteable } from "@/services/types";

export class UserService implements Readable<User>, Createable<User>, Updateable<User>, Deleteable<User> {

  constructor(public httpClient: AxiosInstance) { }

  async get(params: any): Promise<User[]> {
    const response = await this.httpClient.get<User[]>('/users', { params });
    return response.data;
  }

  async getById(id: number): Promise<User> {
    const response = await this.httpClient.get<User>(`/users/${id}`);
    return response.data;
  }

  async create(data: User): Promise<User> {
    const response = await this.httpClient.post<User>('/users', data);
    return response.data;
  }

  async update(id: number, data: User): Promise<User> {
    const response = await this.httpClient.put<User>(`/users/${id}`, data);
    return response.data;
  }

  async delete(id: number): Promise<User> {
    const response = await this.httpClient.delete<User>(`/users/${id}`);
    return response.data;
  }
}