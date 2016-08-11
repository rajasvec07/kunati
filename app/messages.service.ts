import {Injectable,Inject} from "angular2/core";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";
//@Injectable();
export class MessagesService{
    constructor(@Inject(Http) _http:Http){
        this.messages=_http.get("./app/messages/messages.js").map(res=>res.json());
    }
}