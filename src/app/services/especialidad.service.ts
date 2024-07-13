import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private http: HttpClient) { }
  dameListaEspecialidades() {
    return this.http.get(environment.baseUrl + ':' + environment.puertoApiAdmonCatalogos + environment.especialidades);
  }
  borraEspecialidad(id: string) {
    return this.http.delete(environment.baseUrl+':'+environment.puertoApiAdmonCatalogos+environment.especialidades+'/'+id);

  }

}
