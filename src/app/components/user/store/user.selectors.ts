import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';


export const userStateSelector = createFeatureSelector<UserState>('userState');

export const getUsers = createSelector(
    userStateSelector,
    (state) => {    
        return state.users;
    },
);