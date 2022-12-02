import { Injectable } from '@angular/core';
import { Mobile } from './mobile';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
private url="http://localhost:8080/api/mobile";
  constructor(private httpClient:HttpClient) { }

  addMobile(mobile:Mobile):Observable<object>{
    return this.httpClient.post(`${this.url}`,mobile);
  }
  getMobiles():Observable<Mobile[]>{
    return this.httpClient.get<Mobile[]>(`${this.url}`);
  }
  getMobile(id:number):Observable<Mobile>{
    return this.httpClient.get<Mobile>(`${this.url}/${id}`);
  }
  deleteById(id:number):Observable<object>{
    return this.httpClient.delete<Mobile>(`${this.url}/${id}`);
  }
  changeById(id:number,mobile:Mobile):Observable<object>{
    return this.httpClient.put<Mobile>(`${this.url}/${id}`,mobile);
  }
}
