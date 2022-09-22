import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { loadUsersAction } from '../../store/user.actions';
import { User } from '../../store/user.model';
import { UserState } from '../../store/user.reducer';
import { getUsers } from '../../store/user.selectors';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  users$: Observable<User[]>

  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadUsersAction());

    this.users$ = this.store.pipe(select(getUsers));

  }

}
