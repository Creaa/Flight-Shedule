import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";

@Component({
    selector: "app-modal",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
    message;
    registrationNumber;

    changeRegistration($event) {
        this.registrationNumber = $event.target.value;
    }
    saveModal() {
        this.message = {
            command: "saveModal",
            field: this.registrationNumber
        };
        this.messageEvent.emit(this.message);
    }
    closeModal() {
        this.message = "closeModal";
        this.messageEvent.emit(this.message);
    }
    @Output() messageEvent = new EventEmitter<number>();
    @Input() public flightData: Object;
    @Input() public row: Array<IFlight>;
    constructor() {}

    ngOnInit() {
        this.registrationNumber = this.flightData[0].registration;
    }
}
