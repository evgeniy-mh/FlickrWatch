import { Component, OnInit } from "@angular/core";
import { Observable, Subscription, Subject } from 'rxjs/Rx';

import { PictureService } from '../../services/flickr.service';
import { PictureComponent } from '../picture/picture.component';
import { Photo } from "../../classes/photo";

import { Photos } from "../../classes/photos";

@Component({
    selector: "app-picture-grid",
    templateUrl: "./components/picture-grid/picture-grid.component.html",
    styleUrls: ["./components/picture-grid/picture-grid.component.css"],

})
export class PictureGridComponent implements OnInit {

    response: Photos;
    pictures: Array<Photo> = [];

    //GridLayout controls
    public rows;
    public cols;

    public rowInput;
    public colsInput = 5; //<- TODO: change with screen width

    constructor(private pictureService: PictureService) { }

    ngOnInit() {  }

    load() {
        this.pictureService.getRecent().subscribe((result) => {
            this.response = result;
            this.pictures=this.response.photo;

            this.rowInput=result.perpage/this.colsInput;
            this.initGrid();
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
