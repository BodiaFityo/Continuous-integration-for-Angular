import { createReducer, on } from '@ngrx/store';
import { loadUsersData, loadUsersAction } from './user.actions';
import { User } from './user.model';

export interface UserState {
  users: User[];
}

export const userState: UserState = {
  users: [
    {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    },
  }
  ]
};

export const userReducer = createReducer(
  userState,
  on(loadUsersData, (state, users ) => {
    return { ...users}
  }),
);