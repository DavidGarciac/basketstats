import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { StateGroup } from '../shared/navbar/navbar.component';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import Player from 'src/assets/json/datos5.json';
import { SimpleChange } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';
import { Rowset } from 'src/app/models/rowset.model';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.css']
})
export class ComparadorComponent implements OnInit {
  player1: any;
  public Juggador1 = new Rowset(0, 0, 0, '', 0, 0, 0, 0, 0, 0, ' ', 0, 0, 0, 0, ' ', 0, 0, 0 , 0, 0, 0, 0, 0, ' ', 0, 0, 0, 0, 0);
  public Juggador2 = new Rowset(0, 0, 0, '', 0, 0, 0, 0, 0, 0, ' ', 0, 0, 0, 0, ' ', 0, 0, 0 , 0, 0, 0, 0, 0, ' ', 0, 0, 0, 0, 0);
  player2: any;
  public Juggadores: Rowset[];
  // selectoption: string = "puntos";
  opcionSeleccionado: string  = 'Puntos';
  objValue: any;
  objValuedonut: any =  { vista: 'Rebotes',  vista1: 'Rebotes totales', vista2: 'Rebotes Ofensivos',  vista3: 'Rebotes Defensivos', api1: 'treb', api2: 'oreb', api3: 'dreb'};
  datos1donut: any[] = [0 , 0, 0];
  datos2donut: any[] = [0, 0, 0];
  datos1barras: any[] = [0 , 0, 0, 0, 0, 0, 0];
  datos2barras: any[] = [0 , 0, 0, 0, 0, 0, 0];
  DatosLabelsDonut: any[] =['','','','','',''];
  data1: any = 0;
  data2: any = 0;
  objArray = [ { vista: 'puntos', api: 'pts'}, { vista: 'asistencias', api: 'ast'}, { vista: 'rebotes', api:'treb'} ];
  objArray2 = [ { vista: 'Rebotes',  vista1: 'Rebotes totales', vista2: 'Rebotes Ofensivos',  vista3: 'Rebotes Defensivos', api1: 'treb', api2: 'oreb', api3: 'dreb'}, { vista: 'Tiros de Campo', vista1: '% Tiros de Campo', vista2: 'Tiros de Campo Intentados',  vista3: 'Tiros de Campo Anotados', api1: 'fgper',  api2: 'fga', api3: 'fgm'},
  { vista: 'Tiros de 2', vista1: '% Tiros de 2', vista2: 'Tiros de 2 Intentados',  vista3: 'Tiros de 2 Anotados', api1: 'fg2per',  api2: 'fga2', api3: 'fgm2'},{ vista: 'Tiros de 3', vista1: '% Tiros de 3', vista2: 'Tiros de 3 Intentados',  vista3: 'Tiros de 3 Anotados', api1: 'fg3per',  api2: 'fga3', api3: 'fgm3'},
  { vista: 'Tiros Libres', vista1: '% Tiros Libres', vista2: 'Tiros Libres Intentados',  vista3: 'Tiros Libres Anotados', api1: 'ftper',  api2: 'fta', api3: 'ftm'},{ vista: 'Faltas',  vista1: 'Faltas Personales', vista2: 'Faltas Recibidas',  vista3: ' ', api1: 'pf', api2: 'dpf', api3: ' '}, 
  { vista: 'Bloqueos',  vista1: 'Bloqueos', vista2: 'Bloqueos Defensivos',  vista3: ' ', api1: 'blk', api2: 'dblk', api3: ' '}, 
  ];


// INPUTS PARA ELEGIR JUGADORES
stateForm: FormGroup = this._formBuilder.group({
  stateGroup: '',
});
stateForm2: FormGroup = this._formBuilder.group({
  stateGroup: '',
})
stateGroups: StateGroup[] = [{

  type: 'Player',
  names: ['Rudy', 'Rudy Fernandez', 'Mirotic', 'kan', 'Llul']
}, {
  type: 'Team',
  names: ['Dallas', 'California', 'Colorado', 'Connecticut']
}];

stateGroupOptions: Observable<StateGroup[]>;
stateGroupOptions2: Observable<StateGroup[]>;
  constructor(private _formBuilder: FormBuilder, private PruebaService: PruebaService) { 
    // this.player1 = Player;
    // this.player2 = Player;
  }

  ngOnInit(): void {
    
    this.opcionSeleccionado ="Puntos";
 
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
    this.stateGroupOptions2 = this.stateForm2.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );


  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("seleccccc     "+ this.objValue);
    this.selectpie('pts');
  }

  capturar(){
    console.log(this.opcionSeleccionado)
    switch(this.opcionSeleccionado) {
      case ("Puntos"): {
        console.log("entra");
         break;
      } 
      case ("asistencias"): {
         break; 
      }
      default: { 
         //statements; 
         break; 
      }
   }
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({type: group.type, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }
    return this.stateGroups;
  }
  playera(termino: string){
    // Busqueda en la api del jugador
    console.log(termino);  
    if(termino==="Llul"){
      var split= "general";
      var id = 'S. Llull'
      this.PruebaService.cargarSepecificPlayer(id, split).subscribe(resp => {
        this.Juggador1 = resp;
        this.data1 = this.Juggador1.pts;
        this.datos1donut = [ this.Juggador1.treb,this.Juggador1.oreb, this.Juggador1.dreb  ]
        this.DatosLabelsDonut = ["Rebotes","Rebotes Totales", "Rebotes Ofensivos", "Rebotes Defensivos"];
        this.datos1barras = [ this.Juggador1.pts,this.Juggador1.ast, this.Juggador1.treb, this.Juggador1.stl, this.Juggador1.blk, this.Juggador1.fgper, this.Juggador1.val, this.Juggador1.fgm, this.Juggador1.dreb ];
        console.log(this.Juggador1);
        console.log("Jugador especifico" + JSON.stringify(this.Juggador1));
        // this.Juggadores = resp
      });
    }
    else if (termino==="Mirotic"){
      var split= "general";
      var id = 'N. Mirotic'
      this.PruebaService.cargarSepecificPlayer(id, split).subscribe(resp => {
        this.Juggador1 = resp;
        this.data1 = this.Juggador1.pts;
        this.datos1donut = [ this.Juggador1.treb,this.Juggador1.oreb, this.Juggador1.dreb ]
        this.DatosLabelsDonut = ["Rebotes","Rebotes Totales", "Rebotes Ofensivos", "Rebotes Defensivos"];
        this.datos1barras = [ this.Juggador1.pts,this.Juggador1.ast, this.Juggador1.treb, this.Juggador1.stl, this.Juggador1.blk, this.Juggador1.fgper, this.Juggador1.val, this.Juggador1.fgm, this.Juggador1.dreb ];
      });
    }
    else{}
    // this.selectdonut(this.objValuedonut);
    
  }


  
  playerb(termino: string){
    if(termino==="Mirotic"){
      var split= "general";
      var id = 'N. Mirotic'
      this.PruebaService.cargarSepecificPlayer(id, split).subscribe(resp => {
        this.Juggador2 = resp;
        this.data2 = this.Juggador2.pts;
        this.datos2donut = [ this.Juggador2.treb,this.Juggador2.oreb, this.Juggador2.dreb  ]
        this.DatosLabelsDonut = ["Rebotes","Rebotes Totales", "Rebotes Ofensivos", "Rebotes Defensivos"];
        this.datos2barras = [ this.Juggador2.pts,this.Juggador2.ast, this.Juggador2.treb, this.Juggador2.stl, this.Juggador2.blk, this.Juggador2.fgper, this.Juggador2.val, this.Juggador2.fgm, this.Juggador2.dreb ];

      });
    }
    else if(termino==="Llul"){
      var split= "general";
      var id = 'S. Llull'
      this.PruebaService.cargarSepecificPlayer(id, split).subscribe(resp => {
        this.Juggador2 = resp;
        this.data2 = this.Juggador2.pts;
        this.datos2donut = [ this.Juggador2.treb,this.Juggador2.oreb, this.Juggador2.dreb  ]
        this.DatosLabelsDonut = ["Rebotes","Rebotes Totales", "Rebotes Ofensivos", "Rebotes Defensivos"];
        this.datos2barras = [ this.Juggador2.pts,this.Juggador2.ast, this.Juggador2.treb, this.Juggador2.stl, this.Juggador2.blk, this.Juggador2.fgper, this.Juggador2.val, this.Juggador2.fgm,  this.Juggador2.dreb  ];
        console.log("Jugador especifico" + JSON.stringify(this.Juggador1));
      });

    }
   
    // this.selectdonut(this.objValuedonut);
  }

  selectpie(selec: string){
    console.log("selecccc"+ selec);
    this.data1 = this.Juggador1[selec];
    this.data2 = this.Juggador2[selec];
    

  }
  selectdonut(selec: string){
    console.log("selecccc"+ selec[0],selec[1], selec[2]);
    console.log("selecccc"+ [selec[3]]);
    console.log("selecccc"+ [selec[4]]);
    console.log("selecccc"+ [selec[5]]);
    console.log("selecccc"+ [selec[6]]);
  
    // this.datos1donut = [this.Juggador1[selec[0]],this.Juggador1[selec[1]], this.Juggador1[selec[2]]];
    // this.datos2donut = [this.Juggador2[selec[0]],this.Juggador2[selec[1], this.Juggador2[selec[2]]]];
    this.DatosLabelsDonut = [selec[3],selec[4], selec[5], selec[6]];
    this.datos2donut = [this.Juggador2[selec[0]],this.Juggador2[selec[1]], this.Juggador2[selec[2]]];
    this.datos1donut = [this.Juggador1[selec[0]],this.Juggador1[selec[1]], this.Juggador1[selec[2]]];

  }
}
