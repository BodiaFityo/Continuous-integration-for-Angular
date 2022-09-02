import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { User } from '../../store/user.model';
import { first } from 'rxjs/operators';
import { coreReducers } from '../../../../core-reducer';


import { UserComponent } from './user.component';
import { UserState } from '../../store/user.reducer';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let debugElement: DebugElement;
  let store: MockStore<UserState>;
  const initialState = {users: []};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(coreReducers)],
      //imports: [StoreModule.forRoot({})],
      declarations: [ UserComponent ],
      //providers: [ provideMockStore({ initialState })]
    }).compileComponents();

   
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  
    fixture.detectChanges();
    //store = TestBed.inject(MockStore);
  });

  it('should create User Component', (done) => {
    expect(component).toBeTruthy();
    done();
  });

  // it('should create store', (done) => {
  //   expect(store).toBeTruthy();
  //   done();
  // });

  it('should get Users', (done) => {
    const dumpUser = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      } as User
    ]
     

    //store.setState(dumpUser);
    //store.setState({ users: dumpUser })
    debugger
    component.users$.subscribe(user => {
      debugger
      expect(user).toEqual(dumpUser);
      done();

    })
  });

 

});
