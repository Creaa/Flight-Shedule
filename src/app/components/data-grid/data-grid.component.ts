import { Component, Input } from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";
import { FindFlightService } from "src/app/services/find-flight.service";
import { UpdateFlightListService } from "src/app/services/update-flight-list.service";

@Component({
    selector: "data-grid",
    templateUrl: "./data-grid.component.html",
    styleUrls: ["./data-grid.component.css"]
})
export class DataGridComponent {
    message: any;
    filteredFlight: object;
    async receiveMessage(event, param) {
        if (event === "closeModal") {
            this.filteredFlight = undefined;
            return;
        } else if (event.command === "saveModal") {
            this.filteredFlight[0].registration = event.field
                ? event.field
                : "";
            let service = new UpdateFlightListService();
            service.updateList(this.filteredFlight);
            this.filteredFlight = undefined;
            return;
        }
        let service = new FindFlightService();
        this.filteredFlight = service.getFilterFlight(event);
    }

    @Input() public rows: Array<IFlight>;
    public sampleHeaders = [
        "flight",
        "sch. date",
        "sch.time",
        "o/d",
        "registration"
    ];
}
