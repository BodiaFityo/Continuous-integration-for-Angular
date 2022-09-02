import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const loadUsersAction = createAction('[User Component] Load Users');

export const loadUsersData = createAction('[User Component] Load Users Data',
    props<{users: User[]}>()
);

