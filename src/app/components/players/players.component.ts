import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Rowset } from 'src/app/models/rowset.model';
import { PruebaService } from 'src/app/services/prueba.service';






@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
    pageindex: number;
    pageSize = 5;
   // tslint:disable-next-line: max-line-length
   displayedColumns: string[] = ['index','name', 'TCC', 'TCI', 'TCP', 'T3C', 'T3I', 'T3P' , 'T2C', 'T2I', 'T2P', 'TLC', 'TLI', 'TLP', 'ROF', 'RDF', 'RT', 'ASI', 'REC' , 'PER', 'TapFAV', 'TapCon' , 'M' , 'FaltCom' , 'FaltCon' , 'Plus' , 'Val'];
  //  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public Juggadores: Rowset[];
  public sortparameter: string;
  public loading: boolean;


  constructor(private pruebaapi: PruebaService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params =>{
    console.log(params['sort']);
    this.sortparameter = params['sort'];
    });
    this.loading = true;

  }

  ngOnInit(): void {
      this.pruebaapi.cargarPlayers().subscribe(respuesta => { 
      this.Juggadores = respuesta['rowSet'];
      this.loading = false;
     });

  }




}
