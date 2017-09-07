import { Component, OnInit, Input } from '@angular/core';

import { Picture } from '../../classes/picture';

@Component({
    selector: 'app-picture',
    templateUrl: './components/picture/picture.component.html',
    styleUrls: ['./components/picture/picture.component.css']
})

export class PictureComponent implements OnInit {

    @Input() picture: Picture;

    constructor() { }

    ngOnInit() { }

    getPhotoSourceURL() {
        return `https://farm${this.picture.farm}.staticflickr.com/${this.picture.server}/${this.picture.id}_${this.picture.secret}_q.jpg`;
    }
}