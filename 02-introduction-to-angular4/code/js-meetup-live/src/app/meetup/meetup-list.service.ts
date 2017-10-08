import {Injectable} from '@angular/core';

@Injectable()
export class MeetupListService{

    getMeetupList() {
        let meetups = [
            {
                "meetupId": 2,
                "meetupName": "OOJS",
                "meetupDate": "October 30, 2017",
                "description": "ES6 Object Oriented basics",
                "price": '0',
                "starRating": 4.2,
                "imageUrl": "http://html5beginners.com/wp-content/uploads/2014/09/java.png"
            },
            {
                "meetupId": 3,
                "meetupName": "Angular",
                "meetupDate": "October 28, 2017",
                "description": "Angular HandsOn",
                "price": '0',
                "starRating": 4.1,
                "imageUrl": "https://angular.io/assets/images/logos/angular/angular.png"
            }
        ];
        return meetups;
    }
}




