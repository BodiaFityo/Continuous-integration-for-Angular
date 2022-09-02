import { ActionReducerMap } from '@ngrx/store';
import * as User from './components/user/store/user.reducer';

export interface CoreState {
  userState: User.UserState;
}

export const coreReducers: ActionReducerMap<CoreState> = {
  userState: User.userReducer,
};
