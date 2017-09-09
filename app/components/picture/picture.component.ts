import { Component, OnInit, Input, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { Image } from "ui/image";

import { Photo } from '../../classes/photo';

@Component({
    selector: 'app-picture',
    templateUrl: './components/picture/picture.component.html',
    styleUrls: ['./components/picture/picture.component.css']
})
export class PictureComponent implements OnInit {

    @Input() photoModel: Photo;
    @ViewChild("imageTag") imageTag: ElementRef;

    image: Image;

    constructor(private router: Router) { }

    ngOnInit() {
        this.image = this.imageTag.nativeElement; //<-TODO add imade loaded callback function (for loading spinner)
        this.image.src = this.getPhotoSourceURL();
    }

    onImageLoaded = () => {
        console.log("loaded");
    }

    onTap() {
        this.router.navigate(["/picture-details", this.photoModel.id, this.photoModel.secret]);
    }

    getPhotoSourceURL() {
        return `https://farm${this.photoModel.farm}.staticflickr.com/${this.photoModel.server}/${this.photoModel.id}_${this.photoModel.secret}_q.jpg`;
    }
}