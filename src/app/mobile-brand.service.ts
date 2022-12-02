import { Injectable } from '@angular/core';
import { MobileBrand } from './mobile-brand';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileBrandService {
  private url1="http://localhost:8081/api/mobilebrand";
  private url2="http://localhost:8081/api/mobilebrandnames";
  private url3="http://localhost:8081/api/mobilebrandcodes";
  constructor(private httpClient:HttpClient) { }

  
  addMobile(mobilebrand:MobileBrand):Observable<object>{
    return this.httpClient.post(`${this.url1}`,mobilebrand);
  }
  getMobiles():Observable<MobileBrand[]>{
    return this.httpClient.get<MobileBrand[]>(`${this.url1}`);
  }
  getMobile(id:number):Observable<MobileBrand>{
    return this.httpClient.get<MobileBrand>(`${this.url1}/${id}`);
  }
  deleteById(id:number):Observable<object>{
    return this.httpClient.delete<MobileBrand>(`${this.url1}/${id}`);
  }
  changeById(id:number,mobile:MobileBrand):Observable<object>{
    return this.httpClient.put<MobileBrand>(`${this.url1}/${id}`,mobile);
  }
  getBrandNames():Observable<String[]>{
    return this.httpClient.get<String[]>(`${this.url2}`);
  }
  getbrandcodes(bcode:string):Observable<any>{
    return this.httpClient.get<any>(`${this.url3}/${bcode}`)

  }
}
