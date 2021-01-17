import { Component, OnInit } from '@angular/core';
// Importo el archivo JSON 
import Jugadorjson from 'src/assets/json/jugador.json';
import Player from 'src/assets/json/datos5.json';
import { PruebaService } from '../../services/prueba.service';

// import { DatosJugador } from 'src/app/models/datosjugador2.model';
// import { Jugador } from '../teams/teams.component';
import { JugadorInfo } from '../../models';
import { Rowset } from '../../models/rowset.model';
import { Rowarray } from '../../models/Rowarray.model';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  color: string = "light";
  mediapts: any;
  Jugador: any = Jugadorjson ;
  //  player1 = new JugadorModel(' ');
  // public Jug = new  JugadorInfo(0, ' ', ' ', ' ', 0, 0, 0);
  public Juggador1 = new Rowset(0, 0, 0, '', 0, 0, 0, 0, 0, 0, ' ', 0, 0, 0, 0, ' ', 0, 0, 0 , 0, 0, 0, 0, 0, ' ', 0, 0, 0, 0, 0);
  Jugadores: any[] = [];
  public Juggadores: Rowset[];
  public sortparameter: string;

  constructor(private pruebaapi: PruebaService) {
  this.sortparameter = 'pts';
  }
  ngOnInit(): void {
       var filtro1= "accumulated";
       var filtro2= "general";
       var id = 'N. Mirotic'
       this.pruebaapi.cargarSepecificPlayerTabla(id,filtro1,filtro2).subscribe(resp => {
        //  this.Juggador1 = resp;
         this.Juggadores = resp['rowSet'];
         console.log(resp['rowSet'])
         console.log("Jugador especifico" + JSON.stringify(this.Juggadores));
       });


       this.mediapts = 40;
         switch(true) {
         case (this.mediapts > 35): {
             // console.log("entra");
              this.color = 'success';
              break;
           }
           case (this.mediapts > 20): {
             this.color = 'warning';
              // tslint:disable-next-line: align
              break; 
           } 
           case (this.mediapts > 0): {
             this.color = 'danger';
              break; 
           } 
           default: { 
              //statements; 
              break; 
           }
  }
}

// CargarDatosJugador( data: any){

//   this.player1.name = data.first_name;
//   console.log(this.player1)
// }



}
