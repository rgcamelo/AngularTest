import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  url='https://restcountries.eu/rest/v2/lang/es';

  constructor(private http:HttpClient) { }


  consultarPaises(){
    return this.http.get(this.url).pipe(
      map( (res:any[]) =>{
        return res.map( pais => {
          return {nombre:pais.name,codigo:pais.alpha3Code}
        })
      })
    );
  }
}


