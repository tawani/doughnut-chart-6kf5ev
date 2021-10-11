import { Component } from '@angular/core';
import 'chart.piecelabel.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public chartType: string = 'doughnut';
  public chartLabels: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
  ];
  public chartData: Array<number> = [5, 2, 1, 15, 20];
  chartColors: Array<any> = [
    {
      // first color
      backgroundColor: [
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        // 'rgba(75, 192, 192, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(255, 159, 64, 0.3)',
        '#33b35a',
        '#ffce56',
        '#4bc0c0',
        '#CDDC39',
        '#9C27B0',
        '#fb7145',
        '#5971f9',
        // "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"
        // "#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC",
        // "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"
      ],
    },
  ];

  public chartOptions: any = {
    pieceLabel: {
      render: function (args) {
        const label = args.label,
          value = args.value;
        return label + ': ' + value;
      },
    },
  };
}
