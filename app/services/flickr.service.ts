import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, Subscription, Subject } from 'rxjs/Rx';

import { Photo } from "../classes/photo";
import { Photos } from "../classes/photos";
import { GetInfoResponseModel } from "../classes/getInfoResponseModel";
import { FlickrImageSize } from '../classes/flickrImageSize';
import { FlickrApiConfig } from '../classes/FlickrApiConfig';

@Injectable()
export class PictureService {

    baseUrl = "https://api.flickr.com/services/rest/";

    constructor(private http: Http) { }

    getRecent(): Observable<Photos> {
        let headers = new Headers();
        headers.append('Accept', 'application/xml');

        /* let params: URLSearchParams = new URLSearchParams();  //<<-- weird bug with URLSearchParams
        params.set("method", "flickr.photos.getRecent");
        params.set("api_key", "FlickrApiConfig.KEY");
        params.set("format", "json");
        params.set("nojsoncallback", "1");

        return this.http.get(this.baseUrl, { headers: headers, search: params })
            .map(this.extractData)
            .catch(this.handleError); */

        return this.http.get(this.baseUrl
            + "?method=flickr.photos.getRecent"
            + "&api_key=" + FlickrApiConfig.KEY
            + "&format=json"
            + "&nojsoncallback=1"

            , { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    getInfo(photo_id: number, secret: number): Observable<GetInfoResponseModel> {
        let headers = new Headers();
        headers.append('Accept', 'application/xml');

        return this.http.get(this.baseUrl
            + "?method=flickr.photos.getInfo"
            + "&api_key=" + FlickrApiConfig.KEY
            + "&photo_id=" + photo_id
            + "&secret=" + secret
            + "&format=json"
            + "&nojsoncallback=1"

            , { headers: headers })
            .map((res): Response => {
                const body = res.json();
                return body.photo || {};
            })
            .catch(this.handleError);
    }

    public getPhotoSourceURL(farm: string, server: string, id: number, secret: string, imageSize: FlickrImageSize) {
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${imageSize}.jpg`;
    }

    private extractData(res: Response) {
        const body = res.json();
        return body.photos || {};
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
