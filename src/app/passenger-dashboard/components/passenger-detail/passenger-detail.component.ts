import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    templateUrl: 'passenger-detail.component.html',
})

export class PassengerDetailComponent implements OnChanges {
    @Input() detail!: Passenger;

    @Output() edit: EventEmitter<any> = new EventEmitter();
    @Output() remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    constructor () {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['detail']) {
            this.detail = Object.assign({}, changes['detail'].currentValue)
        }
    }

    onNameChange(name: string) {
        this.detail.name = name;
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail)
        } 

        this.editing = !this.editing
    }

    onRemove() {
        this.remove.emit(this.detail)
    }
 }