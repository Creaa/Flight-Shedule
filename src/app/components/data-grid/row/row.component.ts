import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";

@Component({
    selector: "data-row",
    templateUrl: "./row.component.html",
    styleUrls: ["./row.component.css"]
})
export class RowComponent {
    message;
    @Output() messageEvent = new EventEmitter<number>();

    sayMessage() {
        this.messageEvent.emit(this.message);
    }
    onLog(id) {
        this.message = id;
        this.sayMessage();
    }

    @Input() public row: Array<IFlight>;
}
