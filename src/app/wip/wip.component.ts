import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more.src';
import { reduce } from 'highcharts/highcharts.src';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.css']
})
export class WipComponent implements OnInit {

  headers = ['','CW46', 'CW47', 'CW48', 'CW49', 'CW50', 'CW01', 'CW02', 'CW03', 'CW04', 'CW05', 'CW06', 'CW07', 'CW08', 'CW09'];
  table = [
    {
      header: 'FG-FL-MV-V00',
      values:['5860kg', '3254kg', '6572kg', '5217kg', '2231kg', '2136kg', '2347kg', '8231kg', '1239kg', '4510kg', '5217kg', '2231kg', '2136kg', '2347kg']
    },
    {
      header: 'Intermediate Product 02',
      values:['4253kg', '4233kg', '4342kg', '3425kg', '3445kg', '6546kg', '4657kg', '4568kg', '6549kg', '1530kg', '5217kg', '2231kg', '2136kg', '2347kg']
    },
    {
      header: 'Intermediate Product 03',
      values:['5860kg', '3254kg', '6572kg', '5217kg', '2231kg', '2136kg', '2347kg', '8231kg', '1239kg', '4510kg', '5217kg', '2231kg', '2136kg', '2347kg']
    },
    {
      header: 'Intermediate Product 04',
      values:['4253kg', '4233kg', '4342kg', '3425kg', '3445kg', '6546kg', '4657kg', '4568kg', '6549kg', '1530kg', '5217kg', '2231kg', '2136kg', '2347kg']
    },
    {
      header: 'Intermediate Product 05',
      values:['5860kg', '3254kg', '6572kg', '5217kg', '2231kg', '2136kg', '2347kg', '8231kg', '1239kg', '4510kg', '5217kg', '2231kg', '2136kg', '2347kg']
    },
    {
      header: 'Intermediate Product 06',
      values:['4253kg', '4233kg', '4342kg', '3425kg', '3445kg', '6546kg', '4657kg', '4568kg', '6549kg', '1530kg', '5217kg', '2231kg', '2136kg', '2347kg']
    }
  ];

  constructor() { }

  ngOnInit() {
    HighchartsMore(Highcharts);
    HighchartsSolidGauge(Highcharts);
    
    Highcharts.chart("pieChart",this.pieOptions);
    Highcharts.chart("barChart1",this.barOptions1);
    Highcharts.chart("barChart2",this.barOptions2);
    Highcharts.chart("barChart3",this.barOptions3);

  }

  pieOptions:Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    exporting: {
      enabled: false
    },
    credits : {
      enabled: false
    },
    title: {
      text: null
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          connectorColor: 'silver'
        }
      }
    },
    series :[{
      name: 'Share',
      type: undefined,
      data: [
        { name: 'Chrome', y: 61.41 },
        { name: 'Internet Explorer', y: 11.84 },
        { name: 'Firefox', y: 10.85 },
        { name: 'Edge', y: 4.67 },
        { name: 'Safari', y: 4.18 },
        { name: 'Other', y: 7.05 }
      ]
    }
    ]
  }

  barOptions1:Highcharts.Options = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
          'SITE 01',
          'SITE 02',
          'SITE 03',
          'SITE 04',
          'SITE 05',
          'SITE 06'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
          text: 'WIP LEVELS'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0"> </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
    },
    series: [{
     // name: 'Tokyo',
      showInLegend:false,
      type: undefined,
      data: [120000, 135000, 115000, 140000, 125000, 130000]

    }]
  }

  barOptions2:Highcharts.Options = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
          'SITE 01',
          'SITE 02',
          'SITE 03',
          'SITE 04',
          'SITE 05',
          'SITE 06'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
          text: 'WIP LEVELS (Million Euro)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0"> </td>' +
          '<td style="padding:0"><b>{point.y:.1f} million</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
    },
    series: [{
     // name: 'Tokyo',
      showInLegend:false,
      type: undefined,
      color:'orange',
      data: [20.00, 18.50, 22.50, 21.50, 19.50, 20.50]

    }]
  }

  barOptions3:Highcharts.Options = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: [
          'IP007',
          'IP004',
          'IP001',
          'IP011',
          'IP005',
          'IP003',
          'IP002',
          'IP006',
          'IP009',
          'IP012',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
          text: 'WIP LEVELS'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0"> </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
    },
    series: [{
     // name: 'Tokyo',
      showInLegend:false,
      type: undefined,
      color:'#FFBD00',
      data: [17000, 16500, 15500, 14500, 14000, 14000, 13500, 13000, 12000, 12000]

    }]
  }
}
