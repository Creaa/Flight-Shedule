import { NgModule } from "@angular/core";

import { ModalModule } from "../modal/modal.module";
import { DataGridComponent } from "./data-grid.component";
import { GridHeaderModule } from "./header/header.module";
import { RowModule } from "./row/row.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [DataGridComponent],
    exports: [DataGridComponent],
    imports: [GridHeaderModule, RowModule, CommonModule, ModalModule]
})
export class DataGridModule {}
