import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { InterfaceData } from './InterfaceData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<InterfaceData[]>{
    return this.http.get<InterfaceData[]>('../assets/DATA.json')

  }
  
}
