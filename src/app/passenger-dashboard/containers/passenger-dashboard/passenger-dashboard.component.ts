import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {
    
    constructor () {
        this.title = 'Ultimate Angular'
    }
    
    passengers: Passenger[] = [];

    title: string;
    numberOne: number = 1;
    numberTwo: number = 2;
    isHappy: boolean = true
    logo: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png'
    name: string = 'Isa'
    name1: string = 'Anass'
        
    ngOnInit() {
        this.passengers =  [
            {
                id: 1,
                name: 'Isa',
                checkedIn: true,
                checkInDate: 1655214039379,
                pets: [
                    {
                        name: 'Yami',
                        age: 7
                    },
                    { 
                        name: 'Kiara',
                        age: 8
                    }
                ]
            },
            {
                id: 2,
                name: 'Ana',
                checkedIn: false,
                checkInDate: null,
                pets: null
            },
            {
                id: 3,
                name: 'Yami',
                checkedIn: true,
                checkInDate: 1655214039379,
                pets: null
            },
            {
                id: 4,
                name: 'Link',
                checkedIn: false,
                checkInDate: null,
                pets: [
                    {
                        name: 'Epona',
                        age: 10
                    }
                ]
            },
        ]
        
    }

    handleChange(value: string) {
        this.name = value
    }

    handleClick() {
        this.name = "Bella"
    }

    handleValueClick(value: string) {
        console.log(value)

    }


}