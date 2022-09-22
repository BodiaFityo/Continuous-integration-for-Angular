import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { User } from '../../store/user.model';
import { coreReducers } from '../../../../core-reducer';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StoreModule.forRoot(coreReducers)],
            declarations: [UserComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create User Component', (done) => {
        expect(component).toBeTruthy();
        done();
    });

    it('should get Users', (done) => {
        const dumpUser = [
            {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496',
                    },
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets',
                },
            } as User,
        ];

        fixture.detectChanges();

        component.users$.subscribe((user) => {
            expect(user).toEqual(dumpUser);
            done();
        });
    });
});
