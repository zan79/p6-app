import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
