import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../services/user-service';
import { loadUsersData, loadUsersAction } from './user.actions';
import { User } from './user.model';


@Injectable()
export class UserEffects {

loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsersAction),
      switchMap(() => this.httpService.loadUsers()),
      map((users: User[]) => this.store.dispatch(loadUsersData({users}))),
    ), {dispatch: false});

  constructor(
    private actions$: Actions,
    private httpService: UserService,
    private store: Store,
) {
  }
}