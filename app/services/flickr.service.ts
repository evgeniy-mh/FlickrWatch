import { Injectable } from "@angular/core";
import { Observable, Subscription, Subject } from 'rxjs/Rx';

import { Picture } from "../classes/picture";

@Injectable()
export class PictureService {

    getRecent(): Observable<Picture[]> {
        let pictures: Array<Picture> = [];

        for (let i = 0; i < 50; i++) {
            pictures.push({ id: i, title: `Picture ${i}`, ulr: `Url for ${i}` });
        }

        return Observable.of(pictures);
    }
}
