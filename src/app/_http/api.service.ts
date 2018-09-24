import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    _BaseUrl: string = "http://api.hbc.in.th/api/fund/";
    constructor(private http: HttpClient) { }
    // http://api.hbc.in.th/api/fund/claim/smg/2018-09-16/2018-09-17/fax
    //http://api.hbc.in.th/api/fund/claim/2018-09-16/2018-09-17/fax
    get(url: string, fund: string, param: any, type: string) {
        console.log("api call : " + this._BaseUrl + url + fund + param + type);

        return this.http.get(this._BaseUrl + url + fund + param + type)
    }

}
