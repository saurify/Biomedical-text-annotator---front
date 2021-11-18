import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = 'http://127.0.0.1:5000/data?text={0}'
  constructor(private http: HttpClient) { }

  getcall(data:string){
    return this.http.get(this.url.replace('{0}', data))
  }
}
