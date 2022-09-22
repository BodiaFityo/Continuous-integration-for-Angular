import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DashboardServiceService } from "../services/dashboard-service.service";
import { loadDashboard, loadDashboardSucces } from './dashboard.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { Browsers } from "./chart.model";
import { Store } from "@ngrx/store";



@Injectable()
export class DashboardEffects {
    loadDashboardSucces$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadDashboard),
            switchMap(() => this.dashboardService.getBrowsers()),
            map((browsers: Browsers[])=> this.store.dispatch(loadDashboardSucces({browsers})))
        ), {dispatch: false});

    constructor(
        private actions$: Actions,
        private dashboardService: DashboardServiceService,
        private store: Store
        ){}
}

