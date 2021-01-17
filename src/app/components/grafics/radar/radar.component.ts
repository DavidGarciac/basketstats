import { SimpleChange } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component, Input} from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import Player from 'src/assets/json/datos5.json';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  @Input() player: any = {};
  @Input() player2: any = {};
  // @Input() player2: any = {};
  constructor() {}
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [ 'ASI','ROB', 'REB', 'PER'];
  public colors = [
    { // 1st Year.
      backgroundColor: ' rgb(82, 190, 128)'
    },
    { // 2nd Year.
      backgroundColor: 'rgb(93, 173, 226)'
    }
  ]
  radarChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0], label: 'Jugador A' },
    { data: [ 0, 0, 0, 0, 0 ], label: 'Jugador B' }
  ];
  public radarChartType: ChartType = 'radar';

  ngOnInit() {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange })  {
    if( changes['player'] && changes['player'].previousValue != changes['player'].currentValue ) {
      console.log('CAMBIA');
      // tslint:disable-next-line: max-line-length
      this.radarChartData[0]= { data: [this.player.asis,this.player.steals,this.player.total_rebound,this.player.turnovers] , label: this.player.player };
    } else {}
   //  this.mostrar(changes.player.currentValue); 
    if( changes['player2'] && changes['player2'].previousValue != changes['player2'].currentValue ) {
     console.log('CAMBIA');
     // tslint:disable-next-line: max-line-length
     this.radarChartData[1]= { data: [ this.player2.asis,this.player2.steals,this.player2.total_rebound,this.player2.turnovers] , label: this.player2.player };
   }else{}
    this.colors = [
      { // 1st Year.
        backgroundColor: ' rgb(82, 190, 128)'
      },
      { // 2nd Year.
        backgroundColor: 'rgb(93, 173, 226 )'
      }
   ]
   }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
