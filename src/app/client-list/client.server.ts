import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/clients'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createClient(client: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, client);
  }

  // ... (Add methods for updating, deleting clients)
}