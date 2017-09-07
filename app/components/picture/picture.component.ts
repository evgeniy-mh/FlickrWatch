import { Component, OnInit, Input } from '@angular/core';

import { Picture } from '../../classes/picture';

@Component({
    selector: 'app-picture',
    templateUrl: 'picture.component.html',
    styleUrls:['picture.component.css']
})

export class PictureComponent implements OnInit {

    //@Input() picture: Picture;

    constructor() {
        console.log("PictureComponent");
     }

    ngOnInit() { }
}