import { createReducer, on } from "@ngrx/store";
import { Browsers } from "./chart.model";
import { loadDashboard, loadDashboardSucces } from "./dashboard.actions";

export interface DashboardState {
    browsers: Browsers[],
    isLoading: boolean
}

export const dashboardState: DashboardState = {
    browsers: [],
    isLoading: false
}

export const dashboardReducer = createReducer(
    dashboardState,
    on(loadDashboard, (state) => {
        return {...state, isLoading: true}
    }),
    on(loadDashboardSucces, (state, {browsers}) => {
        return {...state, isLoading: false, browsers}
    })
)

  