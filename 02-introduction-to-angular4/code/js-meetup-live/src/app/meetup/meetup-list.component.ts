import { Component } from '@angular/core';
import {MeetupListService} from './meetup-list.service'

@Component({
    selector: 'my-meetups',
    templateUrl: './meetup-list.component.html'
})
export class MeetupListComponent {
    constructor(private _meetupListService : MeetupListService){

    }
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    pageTitle: string = 'Meetup List';
    listFilter: string = 'js';
    meetups: any[] = [];
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(){
        this.meetups = this._meetupListService.getMeetupList();
    }
}