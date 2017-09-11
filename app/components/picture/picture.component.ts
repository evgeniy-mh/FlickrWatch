import { Component, OnInit, Input, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { Image } from "ui/image";

import { Photo } from '../../classes/photo';
import { FlickrImageSize } from '../../classes/flickrImageSize';
import { PictureService } from '../../services/flickr.service';

@Component({
    selector: 'app-picture',
    templateUrl: './components/picture/picture.component.html',
    styleUrls: ['./components/picture/picture.component.css']
})
export class PictureComponent implements OnInit {

    @Input() photoModel: Photo;
    @ViewChild("imageTag") imageTag: ElementRef;

    image: Image;

    constructor(private router: Router, private pictureService: PictureService) { }

    ngOnInit() {
        this.image = this.imageTag.nativeElement; //<-TODO add imade loaded callback function (for loading spinner)
        this.image.src = this.pictureService.getPhotoSourceURL(
            this.photoModel.farm,
            this.photoModel.server,
            this.photoModel.id,
            this.photoModel.secret,
            FlickrImageSize.large_square
        );
    }

    onImageLoaded = () => {
        console.log("loaded");
    }

    onTap() {
        this.router.navigate(["/picture-details", this.photoModel.id, this.photoModel.secret]);
    }
}