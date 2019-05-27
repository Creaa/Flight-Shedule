import { Injectable } from "@angular/core";
import Fligths from "src/assets/mock-data/fligths.js";

@Injectable({
    providedIn: "root"
})
export class UpdateFlightListService {
    updateList(object: object) {
        // Simulating HTTP Request
        setTimeout(() => {
            // There should be call to service serves HTTTP request, but I use local file.
            let flightList = Fligths;
            let currentFlight = object[0];
            flightList.map(el =>
                el.id === currentFlight.id ? (el = object) : null
            );
            return true;
        }, 2000);
    }
    constructor() {}
}
