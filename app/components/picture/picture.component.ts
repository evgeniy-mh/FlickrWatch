import { Component, OnInit, Input } from '@angular/core';

import { Picture } from '../../classes/picture';

@Component({
    selector: 'app-picture',
    templateUrl: './components/picture/picture.component.html',
    styleUrls:['./components/picture/picture.component.css']
})

export class PictureComponent implements OnInit {

    //@Input() picture: Picture;

    constructor() {
        console.log("PictureComponent");
     }

    ngOnInit() { }
}