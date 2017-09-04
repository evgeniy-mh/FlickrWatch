import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, Subscription, Subject } from 'rxjs/Rx';

import { Picture } from "../classes/picture";
import { FlickrApiConfig } from '../classes/FlickrApiConfig';

@Injectable()
export class PictureService {


    baseUrl = "https://api.flickr.com/services/rest/";

    constructor(private http: Http) {

    }

    getRecent(): Observable<Picture[]> {

        let headers = new Headers();
        headers.append('Accept', 'application/xml');

        return this.http.get(this.baseUrl + "?method=flickr.photos.getRecent" + "&api_key=" + FlickrApiConfig.KEY+"&format=json"+"&nojsoncallback=1"
        , { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);



        /* let pictures: Array<Picture> = [];
        for (let i = 0; i < 50; i++) {
            pictures.push({ id: i, title: `Picture ${i}`, ulr: `Url for ${i}`, farm: "1", owner: "1", secret: "1", server: "1" });
        }
        return Observable.of(pictures); */
    }

    private extractData(res: Response) {
        console.log("extractData");
        console.log(res.json());

        const body = res.json();
        return body.photos.photo || {};
    }

    private handleError(error: Response | any) {

        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
