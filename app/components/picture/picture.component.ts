import { Component, OnInit, Input } from '@angular/core';

import { Photo } from '../../classes/photo';

@Component({
    selector: 'app-picture',
    templateUrl: './components/picture/picture.component.html',
    styleUrls: ['./components/picture/picture.component.css']
})

export class PictureComponent implements OnInit {

    @Input() photo: Photo;

    constructor() { }

    ngOnInit() { }

    getPhotoSourceURL() {
        
        return `https://farm${this.photo.farm}.staticflickr.com/${this.photo.server}/${this.photo.id}_${this.photo.secret}_q.jpg`;
    }
}