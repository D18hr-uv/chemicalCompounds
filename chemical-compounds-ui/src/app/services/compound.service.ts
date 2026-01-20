import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CompoundService {
  private API = 'http://localhost:3001/api/compounds';

  constructor(private http: HttpClient) {}

  getCompounds(page = 1) {
    return this.http.get<any>(`${this.API}?page=${page}&limit=10`);
  }

  getCompound(id: number) {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  updateCompound(id: number, data: any) {
    return this.http.put(`${this.API}/${id}`, data);
  }

  deleteCompound(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  createCompound(data: any) {
    return this.http.post(this.API, data);
  }
}
