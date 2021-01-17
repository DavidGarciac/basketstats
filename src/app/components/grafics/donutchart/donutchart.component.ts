import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';



@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})


export class DonutchartComponent implements OnInit {
  // public inp: 'a';
  public centerText: String = "Center Text";
  @Input()
  public datos1: any[];
  @Input()
  public datos1labels: any[];
  @Input()
  public datos2: any[];
  // @Input() data1total: any = {};
  // @Input() data1ofensivos: any = {};
  // @Input() data1defensivos: any = {};
  @Input() nombre1: string;
  @Input() nombre2: string;
  // @Input() data2total: any = {};
  // @Input() data2ofensivos: any = {};
  // @Input() data2defensivos: any = {};
  // myText = 'Hello World' ;
  // public textcenter: 'Puntos';
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales' , 'In-Store Sales', 'In-Store Sales', 'In-Store Sales', 'In-Store Sales'];
  public doughnutChartData: MultiDataSet = [
    [30, 17],
    [20, 10],
    [10, 7] ,
    // [30, 17,0,0,0,0],
    // [20, 10,0,0,0,0],
    // [10, 7,0,0,0,0] ,
  ];

  public doughnutChartType: ChartType = 'doughnut';
  public pieChartColors: Array<any> = [
    {
      // borderWidth: [5, 5, 5, 5, 5, 5, 5, 5],
      backgroundColor: [
        // AZUL OSCURO
        'rgba(3, 83, 164)',
         // GRIS OSCURO
        'rgba(92, 103, 125, 1)',
            // // AZUL MEDIO
       'rgba(4, 102, 200, 1)',
        // // gris MEDIO
         'rgba(151, 157, 172)',

             // // AZUL claro
       'rgba(8, 160, 300, 1)',
        //  // gris claro
         'rgba(181, 187, 202)',
      ]
    },
    {
      backgroundColor: [
        'rgba(4, 102, 200, 1)',
        'rgba(151, 157, 172)',
    ]
    },
    {
      backgroundColor: [
        'rgba(8, 160, 300, 1)',
        'rgba(181, 187, 202)',
    ]
    },
  ];
  public ChartOption: any = {
    centerText: this.centerText,
    //   elements: {
    //     arc: {
    //        borderWidth: [ 1, 1, 7, 7, 7, 7,]
    //    }
    // },
    plugins: {
      datalabels: {
      color:'white',
    }},
    legend: {
     
      position: 'right',
      labels: {
        fontSize: 15,
        color:'black',
        fontColor: 'black',
        usePointStyle: true
      }
    },
 
    
    // tooltips: {
    //   callbacks: {
    //     title: function(tooltipItem, data) {
    //       // console.log(tooltipItem)
    //       if(tooltipItem[0].datasetIndex === 0){
    //         return 'Totales';
    //       }
    //       else if (tooltipItem[0].datasetIndex === 1){
    //         return 'Ofensivos';
    //       }
    //       else if (tooltipItem[0].datasetIndex === 2){
    //         return 'Defensivos';
    //       }

    //     },
    
    //   }
    // }
  }

  public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
    beforeDraw(chart:any) {
      const ctx = chart.ctx;
      const txt = 'Center Text';

      //Get options from the center object in options
      const sidePadding = 60;
      const sidePaddingCalculated = (sidePadding / 100) * (chart.resize.length * 2)

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      const stringWidth = ctx.measureText(txt).width;
      const elementWidth = (chart.width / 12 ) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      const widthRatio = elementWidth / stringWidth;
      const newFontSize = Math.floor(30 * widthRatio);
      const elementHeight = (chart.height / 12);

      // Pick a new font size so it will not be larger than the height of label.
      const fontSizeToUse = Math.min(newFontSize, elementHeight);
      ctx.font = fontSizeToUse + 'px Arial';
      ctx.fillStyle = ' rgba(0, 18, 51, 1)';
// this.chart.chart.legend.allItems.forEach(item => item.setVisible(true));
      // Draw text in center
      ctx.fillText(chart.options.centerText, centerX, centerY);
    }
  }];
  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.datos1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.datos1[0],this.datos1[1], this.datos1[2], this.datos2[0],this.datos2[1], this.datos2[2], this.datos1labels);
    //  this.centerText = this.datos1labels[0]; centerText: this.datos1labels[0],
    var tooltip1 = this.datos1labels[1];
    var tooltip2 = this.datos1labels[2];
    var tooltip3 = this.datos1labels[3];
    if ((this.datos1[0] != 0)|| (this.datos2[0] != 0)){
      // console.log('entraaaaaaaaaaa')
      this.ChartOption = {
        //GROSOR DE GRAFICOS
        cutoutPercentage: 45,
        centerText: this.datos1labels[0],
        elements: {
          arc: {
             borderWidth: [ 1, 1, 7, 7, 7, 7,]
         }
      },
      plugins: {
        datalabels: {
        color:'white',
   
        // anchor: 'end',
        // align: 'end',
        font: {
          size: 9,
        },
      }},
      legend: {
        position: 'left',
        labels: {
          fontSize: 15,
          color:'black',
          fontColor: 'black',
          usePointStyle: true
        }
      },
      tooltips: {
        callbacks: {
          title: function(tooltipItem, data, datos1labels) {
            // console.log(tooltipItem
            if(tooltipItem[0].datasetIndex === 0){
              return tooltip1;
            }
            else if (tooltipItem[0].datasetIndex === 1){
              return tooltip2;
            }
            else if (tooltipItem[0].datasetIndex === 2){
              return tooltip3;
            }
          },
        }
      }
      };
    }
    if ( changes['datos1'] && changes['datos1'].previousValue != changes['datos1'].currentValue ) {
      if (this.datos2[0] === undefined) { this.doughnutChartData = [[ this.datos1[0], 0,0,0,0,0],
        [ this.datos1[1], 0,0,0,0,0],
        [ this.datos1[2], 0,0,0,0,0] ] ; this.doughnutChartLabels=[this.nombre1,' ',]}else{}
      this.doughnutChartData = [[this.datos1[0], this.datos2[0],0,0,0,0],
      [ this.datos1[1], this.datos2[1],0,0,0,0],
      [ this.datos1[2], this.datos2[2],0,0,0,0]]  ; this.doughnutChartLabels=[this.nombre1, this.nombre2, ];
    }else{}

    if( changes['datos2'] && changes['datos2'].previousValue != changes['datos2'].currentValue ) {
      if(this.datos1[0] === undefined){ this.doughnutChartData = [[0, this.datos2[0],0,0,0,0],
        [  0,this.datos2[1],1,1,1,1],
        [0, this.datos2[2],0,0,0,0]] ;this.doughnutChartLabels=[this.nombre2, ' ']}else{}
      this.doughnutChartData = [[this.datos1[0], this.datos2[0],0,0,0,0],
      [ this.datos1[1], this.datos2[1],0,0,0,0],
      [ this.datos1[2], this.datos2[2],0,0,0,0] ] 
      ;this.doughnutChartLabels=[this.nombre1, this.nombre2,];
    }else{}

    // if ( changes['data1total'] && changes['data1total'].previousValue != changes['data1total'].currentValue ) {
    //   if (this.data2total === undefined) { this.doughnutChartData = [[ this.data1total, 0,0,0,0,0],
    //     [ this.data1ofensivos, 0,0,0,0,0],
    //     [ this.data1defensivos, 0,0,0,0,0] ] ; this.doughnutChartLabels=[this.nombre1,' ','ofensiva','ofensiva','defensivas', 'defensivas']}else{}
    //   this.doughnutChartData = [[this.data1total, this.data2total,0,0,0,0],
    //   [ this.data1ofensivos, this.data2ofensivos,0,0,0,0],
    //   [ this.data1defensivos, this.data2defensivos,0,0,0,0]]  ; this.doughnutChartLabels=[this.nombre1, this.nombre2, 'ofensiva','ofensiva','defensivas', 'defensivas'];
    // }else{}

    // if( changes['data2total'] && changes['data2total'].previousValue != changes['data2total'].currentValue ) {
    //   if(this.data1total === undefined){ this.doughnutChartData = [[0, this.data2total,0,0,0,0],
    //     [  0,this.data2ofensivos,1,1,1,1],
    //     [0, this.data2defensivos,0,0,0,0]] ;this.doughnutChartLabels=[this.nombre2, ' ','ofensiva','ofensiva','defensivas', 'defensivas']}else{}
    //   this.doughnutChartData = [[this.data1total, this.data2total,0,0,0,0],
    //   [ this.data1ofensivos, this.data2ofensivos,0,0,0,0],
    //   [ this.data1defensivos, this.data2defensivos,0,0,0,0] ] 
    //   ;this.doughnutChartLabels=[this.nombre1, this.nombre2,'ofensiva','ofensiva','defensivas', 'defensivas'];
    // }else{}
   
  }

  events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
