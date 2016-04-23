/**
 * Created by namita on 4/22/16.
 */
import {Injectable} from "angular2/core";
import {Http} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class HttpTestService {
    constructor(private _http:Http) {
    }

    getCurrentTime() {
        return this._http.get("./testdata.json")
            .map(function (response) {
                return response.json()
            });
    }
}