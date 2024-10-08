import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Region } from '../model/dto/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  dameListaRegiones() {
    //return this.http.get('http://ec2-54-153-58-93.us-west-1.compute.amazonaws.com:3005/regiones');
    return this.http.get(environment.baseUrl + ':' + environment.puertoApiAdmonCatalogos + environment.regiones);

  }
  borraRegion(id: string) {
    //return this.http.delete('http://ec2-54-153-58-93.us-west-1.compute.amazonaws.com:3005/regiones/'+id);
    return this.http.delete(environment.baseUrl + ':' + environment.puertoApiAdmonCatalogos + environment.regiones + '/' + id);

  }
  insertaRegion(region:Region) {
    return this.http.post(environment.baseUrl + ':' + environment.puertoApiAdmonCatalogos + environment.regiones,region);

  }

}
