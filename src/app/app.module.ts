import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HelloWorldComponent,
        TwoWayBindingComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }
