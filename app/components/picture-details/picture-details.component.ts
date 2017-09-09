import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../../classes/photo';

@Component({
    selector: 'app-picture-details',
    templateUrl: './components/picture-details/picture-details.component.html'
})

export class PictureDetailsComponent implements OnInit {

    photo_id: number;
    secret: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.photo_id = parseInt(params['photo_id']);
            this.secret = parseInt(params['secret']);
        });
    }
}