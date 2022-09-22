import { TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { Browsers } from '../store/chart.model';

import { DashboardServiceService } from './dashboard-service.service';

describe('DashboardServiceService', () => {
    let service: DashboardServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DashboardServiceService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get Browsers', (done) => {
        const browsers = [
            {
                name: 'Chrome',
                y: 70.67,
                sliced: true,
                selected: true,
            },
        ];
        service
            .getBrowsers()
            .pipe(first())
            .subscribe((res: Browsers[]) => {
                expect(res).toContain(browsers[0]);
                done();
            });
    });
});
