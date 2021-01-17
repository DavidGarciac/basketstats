import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
//  import { MatSort } from '@angular/material/sort';
import Jugadorjson from 'src/assets/json/jugador.json';

import { MatSortModule, MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

import {Observable} from 'rxjs';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
import { combineLatest } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';

import { MatPaginator  } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { Rowsetteam } from '../../models/rowsetteam.model';
import { PruebaService } from 'src/app/services/prueba.service';


  
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  public loading: boolean;

  filterValues: any = {};

  pageindex: number;

   @ViewChild(MatSort, {static: true}) sort: MatSort;
   @ViewChild(MatSort, {static: true}) sort2: MatSort;
   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
   public Teams: Rowsetteam[];

    constructor(private pruebaapi: PruebaService) {
      this.loading = true;

}
   Jugador: any = Jugadorjson ;
  ngOnInit() {

    this.pruebaapi.cargarTeams().subscribe(respuesta => {

      this.Teams = respuesta['rowSet'];
      this.loading = false;

     });

    

  }




}




