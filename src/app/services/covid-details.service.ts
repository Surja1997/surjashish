import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {covid } from '../interfaces/covid-details'
@Injectable({
  providedIn: 'root'
})
export class CovidDetailsService {
  private _url:string="https://api.covid19india.org/raw_data8.json";


  constructor(private http: HttpClient) { }
  getDetails(): Observable<covid[]>{

    return this.http.get<covid[]>(this._url );
  }
}
