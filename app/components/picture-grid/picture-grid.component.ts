import { Component, OnInit } from "@angular/core";
import { Observable, Subscription, Subject } from 'rxjs/Rx';

import { PictureService } from '../../services/flickr.service';
import { PictureComponent } from '../picture/picture.component';
import { Picture } from "../../classes/picture";

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

    constructor(private pictureService: PictureService) { }

    ngOnInit() {
        this.initGrid();
    }

    load() {
        console.log("load");
        this.pictureService.getRecent().subscribe((result) => {
            this.pictures = result;
        });
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
