import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MeetupListComponent } from './meetup/meetup-list.component';
import { MeetupListService } from './meetup/meetup-list.service';

@NgModule({
  declarations: [
    AppComponent, MeetupListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [MeetupListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
