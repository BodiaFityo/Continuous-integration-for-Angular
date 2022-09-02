import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { UserComponent } from './ui/user/user.component';
import { UserService } from './services/user-service';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forRoot([UserEffects]),
    RouterModule.forChild([{
      path: '', component: UserComponent, pathMatch: 'full'
    }]),
  ],
  providers: [
    UserService
  ],
  declarations: [
    UserComponent
  ],
  exports: [RouterModule, UserComponent]
})
export class UserModule { }