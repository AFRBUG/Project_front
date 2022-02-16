import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class MapserviceService {

  [x: string]: any;
  capitals: string = '/assets/data/usa-capitals.geojson';
  testa:any ; 

  constructor(private http: HttpClient) { }
  
}
