import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, Subscription, Subject } from 'rxjs/Rx';

import { Picture } from "../classes/picture";
import { FlickrApiConfig } from '../classes/FlickrApiConfig';

@Injectable()
export class PictureService {


    baseUrl = "https://api.flickr.com/services/rest/";

    constructor(private http: Http) { }

    getRecent(): Observable<Picture[]> {
        let headers = new Headers();
        headers.append('Accept', 'application/xml');

        /* let params: URLSearchParams = new URLSearchParams();
        params.set("method", "flickr.photos.getRecent");
        params.set("api_key", "FlickrApiConfig.KEY");
        params.set("format", "json");
        params.set("nojsoncallback", "1");

        return this.http.get(this.baseUrl, { headers: headers, search: params })
            .map(this.extractData)
            .catch(this.handleError); */

        return this.http.get(this.baseUrl + "?method=flickr.photos.getRecent" + "&api_key=" + FlickrApiConfig.KEY + "&format=json" + "&nojsoncallback=1"
            , { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
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
