import { Component, OnInit, Input, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
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

    image:Image;

    constructor() { }

    ngOnInit() {
        this.image=this.imageTag.nativeElement; //<-TODO add imade loaded callback function 
        this.image.src=this.getPhotoSourceURL();
    }

    onImageLoaded=()=>{
        console.log("loaded");
    }

    getPhotoSourceURL() {
        return `https://farm${this.photoModel.farm}.staticflickr.com/${this.photoModel.server}/${this.photoModel.id}_${this.photoModel.secret}_q.jpg`;
    }
}