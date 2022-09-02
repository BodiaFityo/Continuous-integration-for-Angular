import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { first } from 'rxjs';
import { User } from '../store/user.model';

import { UserService } from './user-service';

describe('UserServiceService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users', (done) => {
    const user = {
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
    } as User;
    service.loadUsers().pipe(
      first()
    ).subscribe(users => {
      expect(users[0]).toEqual(user);
      expect(users.length).toBeGreaterThan(1);
      done();
    })
  })
});
