import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JugadorInfo } from '../models/Jugador.model';
import { Rowset } from '../models/rowset.model';
import { Rowarray } from '../models/Rowarray.model';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  url1 = 'https://www.balldontlie.io/api/v1/';
  url2 = `http://35.228.14.143:5000/traditional/players`;
  url3 = `http://35.228.14.143:5000/`;
  public array: Rowset[] = [];
  // public rowarray = new Rowarray();

  constructor( private http: HttpClient) { }

  // Access-Control-Allow-Origin

  getQuery2(query: string){
    const url4 = `http://35.228.60.119:5000/${ query }`;

    return this.http.get(url4);
  }

  // <Cargar Todos los Jugadores>

  cargarPlayers(){
    return this.getQuery2(`traditional/players`).pipe( map( data =>{
       return (data);
        })
      );
}
  // <Cargar Todos los Jugadores con FILTROS>
cargarPlayersFilter(filtro1: string, filtro2: string){
  return this.getQuery2(`traditional/players?type=${ filtro1 }&split=${ filtro2 }`).pipe( map( data =>{
     return (data);
      })
    );
}

//  <Cargar Jugador Específico>
// http://35.228.14.143:5000/player/S.%20Llull/traditional?type=pergame&split=visitor
  cargarSepecificPlayer(id: string, split: string){
    return this.getQuery2(`player/${ id }/traditional?type=accumulated&split=${ split }`)
    .pipe(
       map( data => {
        //  console.log("pasaaaaaaa"+ JSON.stringify(data['rowSet'][0]))
         return Rowset.RowsetDesdeJson(data['rowSet'][0]);
          })
    );
        // data['rowSet']));
    // return this.http.get<Row>(this.url3 + `player/N. Mirotic/traditional`).pipe( map( data => data['rowSet']));
  }

  cargarSepecificPlayerTabla(id: string,filtro1: string, filtro2: string){
    return this.getQuery2(`player/${ id }/traditional?type=${ filtro1 }&split=${ filtro2 }`)
    .pipe(
       map( data => {
        //  console.log("pasaaaaaaa"+ JSON.stringify(data['rowSet'][0]))
        return (data);
          })
    );
        // data['rowSet']));
    // return this.http.get<Row>(this.url3 + `player/N. Mirotic/traditional`).pipe( map( data => data['rowSet']));
  }

   // FUNCION TODOS LOS EQUIPOS
   // http://35.228.14.143:5000/traditional/teams?type=pergame&split=local&opp=yes
  cargarTeams() {
    return this.getQuery2(`traditional/teams`).pipe( map( data =>{
      return (data);
       })
     );
  }

    // <Cargar Todos los EQUIPOS con FILTROS>
cargarTeamsFilter(filtro1: string, filtro2: string){
  return this.getQuery2(`traditional/teams?type=${ filtro1 }&split=${ filtro2 }`).pipe( map( data =>{
     return (data);
      })
    );
}

  // Funcion especifica EQUIPO ()
  // http://35.228.14.143:5000/team/Unicaja/traditional?type=pergame&split=local&opp=yes
  cargarSepecificTeam(split: string){
    return this.getQuery2(`team/Unicaja/traditional`)
    .pipe(
       map( data => {
         console.log("pasaaaaaaa"+ JSON.stringify(data['rowSet'][0]))
         return Rowset.RowsetDesdeJson(data['rowSet'][0]);
          })
    );
  }

  getQuery( query: string){
    const url = `https://www.balldontlie.io/api/v1/${ query }`;


    // const url2 = `http://35.228.14.143/traditional/players`;
    // const headers = new HttpHeaders ({
    //   'Authorization': `Bearer ${this.tooken}`
    // });
    // return this.http.get(url, { headers});
    return this.http.get<any>(url);
  }


  cargarPLayer(id: string){
    return this.http.get<JugadorInfo>( this.url1 + `players/${ id }`)
    .pipe(
      map( resp => {
        console.log("pasaaaaaaa"+ JSON.stringify(resp))
        return JugadorInfo.jugadorDesdeJson(resp);
      })
    );
  }
}
