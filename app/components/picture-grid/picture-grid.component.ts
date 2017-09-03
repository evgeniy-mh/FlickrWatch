import { Component, OnInit } from "@angular/core";

import { Picture } from "../../classes/picture";
import { Observable, Subscription, Subject } from 'rxjs/Rx';

@Component({
    selector: "app-picture-grid",
    templateUrl: "./components/picture-grid/picture-grid.component.html",
    styleUrls: ["./components/picture-grid/picture-grid.component.css"],

})
export class PictureGridComponent implements OnInit {

    pictures: Array<Picture> = [];

    //GridLayout controls
    public rows;
    public cols;

    public rowInput = 10;
    public colsInput = 5;

    constructor() {
        for (let i = 0; i < 50; i++) {
            this.pictures.push({ id: i, title: `Picture ${i}`, ulr: `Url for ${i}` });
        }
    }

    ngOnInit() {
        this.initGrid();
    }

    getGridSpec(length: number, size?: number): string {
        let resSpec = [];
        for (let i = 0; i < length; i++) {
            if (size) {
                resSpec.push(size.toString());
            } else {
                resSpec.push("*");
            }

        }
        return resSpec.join(",");
    }

    initGrid() {
        this.rows = Observable.range(0, this.rowInput).toArray();
        this.cols = Observable.range(0, this.colsInput).toArray();
    }

    getPositionInArray(row: number, col: number): number {
        return col + (row * this.colsInput);
    }

}
