import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { delay } from 'rxjs/operators';

import { Browsers } from '../store/chart.model';

@Injectable({
    providedIn: 'root',
})
export class DashboardServiceService {
    constructor() {}

    public getBrowsers(): Observable<Browsers[]> {
        return of([
            {
                name: 'Chrome',
                y: 70.67,
                sliced: true,
                selected: true,
            },
            {
                name: 'Edge',
                y: 14.77,
            },
            {
                name: 'Firefox',
                y: 4.86,
            },
            {
                name: 'Safari',
                y: 2.63,
            },
            {
                name: 'Internet Explorer',
                y: 1.53,
            },
            {
                name: 'Opera',
                y: 1.4,
            },
            {
                name: 'Sogou Explorer',
                y: 0.84,
            },
            {
                name: 'QQ',
                y: 0.51,
            },
            {
                name: 'Other',
                y: 2.6,
            },
        ]).pipe(delay(2000));
    }
}
