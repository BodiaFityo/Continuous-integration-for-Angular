import { ActionReducerMap } from '@ngrx/store';
import * as User from './components/user/store/user.reducer';
import * as Dashboard from './components/dashboard/store/dashboard.reducer';

export interface CoreState {
  userState: User.UserState;
  dashboardState: Dashboard.DashboardState
}

export const coreReducers: ActionReducerMap<CoreState> = {
  userState: User.userReducer,
  dashboardState: Dashboard.dashboardReducer
};
