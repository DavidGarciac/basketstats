import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PruebaService } from 'src/app/services/prueba.service';
import { Rowsetteam } from '../../../models/rowsetteam.model';

let ELEMENT_DATA: Rowsetteam[] = [
  // tslint:disable-next-line: max-line-length
  {fga2: 46, pts :66, val:79, min:'11413', tov:15, fga3:1,fgper:55.32,fta:17,pf:10,blk:0,ftm:13,ftper:76.47,fgm2:25,fgm3:1,foto: 'http://static.acb.com/img/e/53/16/1453195579.png',mat:4,ast:8,fgm:26,fg2per:54.35,partidos:5,dreb:21,fga:47,stl:3,nombre_equipo:'Club Joventut Badalona',treb:29,oreb:8,dpf:23,dblk:0,fg3per:100},
 ];

@Component({
  selector: 'app-tablateams',
  templateUrl: './tablateams.component.html',
  styleUrls: ['./tablateams.component.css']
})

export class TablateamsComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = [ 'index', 'foto', 'nombre_equipo', 'games', 'min', 'pts', 'fgm', 'fga', 'fgper', 'fgm2', 'fga2', 'fg2per','fgm3', 'fga3', 'fg3per', 'ftm', 'fta', 'ftper', 'oreb',  'dreb', 'treb', 'ast', 'tov', 'stl', 'blk', 'dblk', 'dunk', 'pf',  'dpf', 'val' ];
  @Input() items: Rowsetteam[] = [];
  @Input() sorttable: string;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  sortvariable = "pts";
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  Filtro1: Array<{ vista: string, api: string}> = [{ vista: 'Acumulado', api: 'accumulated'}, { vista: 'Por Partido', api: 'pergame'}];
  Filtro2: Array<{ vista: string, api: string}> = [{ vista: 'General', api: 'general'}, { vista: 'Visitante', api: 'visitor'},
     { vista: 'Local', api: 'local'}, { vista: 'Victoria', api: 'victory'},
     { vista: 'Derrota', api: 'defeat'}, { vista: 'Va Ganando', api: 'ahead'},
     { vista: 'Va Perdiendo', api: 'behind'},{ vista: 'Va Empate', api: 'tied'}];
  selectedSortOrder: string = 'accumulated';
  selectedSortOrderType: string = 'general';
  selectedSortOrderVista: string = 'Acumulados';
  selectedSortOrderTypeVista: string = 'General';
  public loading: boolean;
  public isShowFilter1: boolean = false;
  public isShowFilter2: boolean = false;
  constructor(private pruebaapi: PruebaService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.items);
    this.sortvariable = this.sorttable;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; 
  }

  ChangeSortOrder(newSortOrder: string, NewSortOrderVista: string) { 
    console.log("NEW"+ newSortOrder+  NewSortOrderVista);
    if ((this.isShowFilter1===true  )&&(newSortOrder === 'accumulated')  ){console.log("entra true"); this.isShowFilter1 = false; } else { console.log("entra");this.isShowFilter1 = true; }
     this.loading = true;
    this.selectedSortOrder = newSortOrder;
    this.selectedSortOrderVista = NewSortOrderVista;
    this.CargarTabla();
  }
  ChangeSortOrderType(newSortOrder: string,  NewSortOrderVista: string) { 
      console.log("NEW"+ newSortOrder+  NewSortOrderVista);

    if ((this.isShowFilter2===true  )&&(newSortOrder === 'general')){console.log("entra true"); this.isShowFilter2 = false; } else { console.log("entra");this.isShowFilter2 = true; }
     this.loading = true;
    this.selectedSortOrderType = newSortOrder;
    this.selectedSortOrderTypeVista = NewSortOrderVista;
    console.log("NEW2"+ this.selectedSortOrderTypeVista);
    this.CargarTabla();
  }
  
  CargarTabla(){
    this.pruebaapi.cargarTeamsFilter(this.selectedSortOrder, this.selectedSortOrderType).subscribe(respuesta => {
       this.dataSource = new MatTableDataSource(respuesta['rowSet']);
       this.paginator.firstPage();
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
       this.loading = false;  
     
     });
    }


}
