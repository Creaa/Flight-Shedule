import { Injectable } from "@angular/core";
import Fligths from "src/assets/mock-data/fligths.js";

@Injectable({
    providedIn: "root"
})
export class FindFlightService {
    getFilterFlight(id: number) {
        // There should be call to service serves HTTTP request, but I use local file.
        let flightList = Fligths;
        let filteredFlight = flightList.filter(el => el.id === id);
        return filteredFlight;
    }
    constructor() {}
}
