import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadDashboard } from '../../store/dashboard.actions';
import { isLoadingDashboard, loadDashboardSucces } from '../../store/dashboard.selectors';
import { Observable } from 'rxjs';
import { CoreState } from 'src/app/core-reducer';
import { Browsers } from '../../store/chart.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  isLoading$: Observable<boolean>;
  browsers$: Observable<Browsers[]>;

  constructor(private store: Store<CoreState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadDashboard());

    this.isLoading$ = this.store.pipe(select(isLoadingDashboard));

    this.browsers$ = this.store.pipe(select(loadDashboardSucces));
  }

}
