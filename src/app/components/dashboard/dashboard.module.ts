import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { PieChartComponent } from 'src/app/charts/pie-chart/pie-chart.component';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/dashboard.effects';
import { DashboardServiceService } from './services/dashboard-service.service';

@NgModule({
    imports: [
        CommonModule,
        HighchartsChartModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
                pathMatch: 'full',
            },
        ]),
        EffectsModule.forFeature([DashboardEffects]),
    ],
    providers: [DashboardServiceService],
    declarations: [DashboardComponent, PieChartComponent],
    exports: [RouterModule, DashboardComponent],
})
export class DashboardModule {}
