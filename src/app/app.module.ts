import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { coreReducers } from './core-reducer';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(coreReducers),
        EffectsModule.forRoot(),

        // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        //EffectsModule.forRoot([UserEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
