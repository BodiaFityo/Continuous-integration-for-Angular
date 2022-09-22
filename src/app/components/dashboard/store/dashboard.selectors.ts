import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from '../../../core-reducer';
import { DashboardState } from './dashboard.reducer';

export const dashboardStateSelector = (state: CoreState) => state.dashboardState as DashboardState;
//export const dashboardStateSelector = createFeatureSelector<DashboardState>('dashboardState');

export const isLoadingDashboard = createSelector(
    dashboardStateSelector,
    (state) => state.isLoading
);

export const loadDashboardSucces = createSelector(
    dashboardStateSelector,
    (state) => state.browsers
);

