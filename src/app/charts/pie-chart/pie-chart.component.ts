import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
import { Browsers } from 'src/app/components/dashboard/store/chart.model';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent implements OnInit {
    @Input() data: Browsers[];

    highcharts = Highcharts;

    chartOptions: Highcharts.Options;
    constructor() {}

    ngOnInit(): void {
        this.chartOptions = this.initChartOptions();
    }

    initChartOptions(): any {
        return {
            chart: {
                plotBackgroundColor: '',
                plotBorderWidth: 0,
                plotShadow: false,
                type: 'pie',
            },
            title: {
                text: 'Browser market shares in May, 2020',
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    },
                },
            },
            series: [
                {
                    name: 'Brands',
                    colorByPoint: true,
                    data: this.data,
                },
            ],
        };
    }
}
