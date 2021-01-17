import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {
  FiltrosFormArray: Array<any> = [0,1,2,3,4,5,6];
  FiltroslabelsFormArray: Array<any> = ['pts','ast','treb','stl','blk','fgper','val'];
  filtroscheck = [ 
    {name :"pts", id: 0 , check: true},
    {name :"ast", id: 1, check: true},
    {name :"treb", id: 2, check: true},
    {name :"stl", id: 3, check: true},
    {name :"blk", id: 4, check: true},
    {name :"fgper", id: 5, check: true},
    {name :"val", id: 6, check: true},
    {name :"fgm", id: 7, check: false},
    {name :"dreb", id: 8, check: false},

  ];

  //  this.Juggador1.fgper, this.Juggador1.val ];
  @Input() JugadorAzul: any = {};
  @Input() JugadorGris: any = {};
  @Input() nombre1: string;
  @Input() nombre2: string;

  @Input()
  public datos1: any[];
  @Input()
  public datos2: any[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };


  public barChartLabels: Label[] = ['pts', 'ast', 'reb', 'stl', 'blk', 'fgper', 'val'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  // public colors = [
  //   { 
  //     backgroundColor: 'rgba(92, 103, 125, 1)'
  //   },
  //   { 
  //     backgroundColor: ' rgba(3, 83, 164) '
  //   }
  // ]

  public BarrChartColors: Color[] = [
    {backgroundColor: ['rgba(3, 83, 164) ', 'rgba(3, 83, 164) ', 'rgba(3, 83, 164) ']},
  {backgroundColor: ['rgba(92, 103, 125, 1)', 'rgba(92, 103, 125, 1)', ' rgba(92, 103, 125, 1)']},
  ];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
 
  constructor() { }

  ngOnInit(): void {
    //  var element = document.getElementById('is3dCheckBox');
    //  element.checked = true;
    // var isChecked = (<HTMLInputElement><any>element).checked;
 

  }
  ngOnChanges(changes: SimpleChanges): void {
 
    if( changes['datos1'] && changes['datos1'].previousValue != changes['datos1'].currentValue ) {
      if(this.datos2 === undefined) {
        // tslint:disable-next-line: max-line-length
        this.barChartData[0] = { data: [this.datos1[0], this.datos1[1], this.datos1[2], this.datos1[3], this.datos1[4], this.datos1[5], this.datos1[6]], label:this.nombre1};

      } else {}
      this.barChartData[0] = { data: [this.datos1[0], this.datos1[1], this.datos1[2], this.datos1[3], this.datos1[4], this.datos1[5], this.datos1[6]], label:this.nombre1};
      this.barChartData[1] = { data: [this.datos2[0], this.datos2[1], this.datos2[2], this.datos2[3], this.datos2[4], this.datos2[5], this.datos2[6]], label:this.nombre2};
    } else {}

    if( changes['datos2'] && changes['datos2'].previousValue != changes['datos2'].currentValue ) {
      if(this.datos1 === undefined) { 
        this.barChartData[1] = { data: [this.datos2[0], this.datos2[1], this.datos2[2], this.datos2[3], this.datos2[4], this.datos2[5], this.datos2[6]], label:this.nombre2};
      } else {}
      this.barChartData[0] = {  data: [this.datos1[0], this.datos1[1], this.datos1[2], this.datos1[3], this.datos1[4], this.datos1[5], this.datos1[6]], label:this.nombre1};
      this.barChartData[1] = { data: [this.datos2[0], this.datos2[1], this.datos2[2], this.datos2[3], this.datos2[4], this.datos2[5], this.datos2[6]], label:this.nombre2};
    } else {}

    // this.colors = [
    //   { 
    //     backgroundColor: 'rgba(92, 103, 125, 1)',
    //   },
    //   { 
    //     backgroundColor: ' rgba(3, 83, 164) '
    //   }
    // ]


    this.BarrChartColors = [
      {backgroundColor:['rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ', ]},
      {backgroundColor:['rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)', 'rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)', 'rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)', 'rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)']},
  ];

    console.log( this.BarrChartColors);
  
  }

  
  // events

  onChange(filtro:string, id:number, isChecked: boolean) {
    if(isChecked) {
      this.FiltrosFormArray.push(id);
      this.FiltroslabelsFormArray.push(filtro);
      // console.log(filtro);

      var data1: any[] = [];
      var data2: any[] = [];
      // var data1 = new Array(); 
      // var data2 = new Array(); 
      for (let i = 0; i < this.FiltrosFormArray.length; i++) {
        // console.log(this.datos1[i])
        data1.push(this.datos1[this.FiltrosFormArray[i]]);
        data2.push(this.datos2[this.FiltrosFormArray[i]]);
      }
      console.log(data1);

      this.barChartData[0] = { data: [this.datos1[this.FiltrosFormArray[0]], this.datos1[this.FiltrosFormArray[1]],
        this.datos1[this.FiltrosFormArray[2]], this.datos1[this.FiltrosFormArray[3]],
        this.datos1[this.FiltrosFormArray[4]], this.datos1[this.FiltrosFormArray[5]], 
        this.datos1[this.FiltrosFormArray[6]], this.datos1[this.FiltrosFormArray[7]],
        this.datos1[this.FiltrosFormArray[8]]], label:this.nombre1};
      this.barChartData[1] = { data: [this.datos2[this.FiltrosFormArray[0]], this.datos2[this.FiltrosFormArray[1]],
        this.datos2[this.FiltrosFormArray[2]], this.datos2[this.FiltrosFormArray[3]],
        this.datos2[this.FiltrosFormArray[4]], this.datos2[this.FiltrosFormArray[5]], 
        this.datos2[this.FiltrosFormArray[6]], this.datos2[this.FiltrosFormArray[7]],
        this.datos2[this.FiltrosFormArray[8]]], label:this.nombre2};

      this.barChartLabels = [];
      for (let i = 0; i < this.FiltroslabelsFormArray.length; i++) {
        
        this.barChartLabels.push(this.FiltroslabelsFormArray[i]);
      }
      // this.colorr;
   
    
      // this.barChartLabels = [this.FiltroslabelsFormArray]
    } else {
       let index = this.FiltrosFormArray.indexOf(id);
       this.FiltrosFormArray.splice(index,1);
       this.FiltroslabelsFormArray.splice(index,1);
       console.log ("entra");

       this.barChartData[0] = { data: [this.datos1[this.FiltrosFormArray[0]], this.datos1[this.FiltrosFormArray[1]],
        this.datos1[this.FiltrosFormArray[2]], this.datos1[this.FiltrosFormArray[3]],
        this.datos1[this.FiltrosFormArray[4]], this.datos1[this.FiltrosFormArray[5]], 
        this.datos1[this.FiltrosFormArray[6]], this.datos1[this.FiltrosFormArray[7]],
        this.datos1[this.FiltrosFormArray[8]]], label:this.nombre1};
       this.barChartData[1] = { data: [this.datos2[this.FiltrosFormArray[0]], this.datos2[this.FiltrosFormArray[1]],
        this.datos2[this.FiltrosFormArray[2]], this.datos2[this.FiltrosFormArray[3]],
        this.datos2[this.FiltrosFormArray[4]], this.datos2[this.FiltrosFormArray[5]], 
        this.datos2[this.FiltrosFormArray[6]], this.datos2[this.FiltrosFormArray[7]],
        this.datos2[this.FiltrosFormArray[8]]], label: this.nombre2};
       this.barChartLabels = [];
       for (let i = 0; i < this.FiltroslabelsFormArray.length; i++) { 
          this.barChartLabels.push(this.FiltroslabelsFormArray[i]);
        }
    }    
    this.BarrChartColors = [
      {backgroundColor:['rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ','rgba(3, 83, 164) ', ]},
      {backgroundColor:['rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)', 'rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)', 'rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)', 'rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)','rgba(92, 103, 125, 1)']},
  ];
}



  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  

}
