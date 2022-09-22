import { createAction, props } from "@ngrx/store";
import { Browsers } from "./chart.model";

export const loadDashboard = createAction('[Dashboard Component] Load Dashboard');
export const loadDashboardSucces = createAction(
    '[Dashboard Component] Load Dashboard Data', 
    props<{browsers: Browsers[]}>()
);