import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from "ui/image";

import { PictureService } from '../../services/flickr.service';

import { Photo } from '../../classes/photo';
import { FlickrImageSize } from '../../classes/flickrImageSize';
import { GetInfoResponseModel } from "../../classes/getInfoResponseModel";

@Component({
    selector: 'app-picture-details',
    templateUrl: './components/picture-details/picture-details.component.html'
})

export class PictureDetailsComponent implements OnInit {

    @ViewChild("imageTag") imageTag: ElementRef;

    image: Image;

    photo_id: number;
    secret: number;

    photoInfo: GetInfoResponseModel;

    constructor(private route: ActivatedRoute, private pictureService: PictureService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.photo_id = parseInt(params['photo_id']);
            this.secret = parseInt(params['secret']);

            this.pictureService.getInfo(this.photo_id, this.secret).subscribe(response => {
                this.photoInfo = response;

                this.image = this.imageTag.nativeElement; //<-TODO add imade loaded callback function (for loading spinner)
                this.image.src = this.pictureService.getPhotoSourceURL(
                    this.photoInfo.farm,
                    this.photoInfo.server,
                    this.photoInfo.id,
                    this.photoInfo.secret,
                    FlickrImageSize.b_large
                );
            });
        });
    }
}