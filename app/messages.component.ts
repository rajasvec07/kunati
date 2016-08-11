 import { Component, Inject, provide} from "angular2/core";
 import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet, RouteConfig, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {MessagesService } from "./messages.service";
@Component({
        template:"Read Message..."
    })
        export class ReadMessage{}
@Component({
    selector: "messages",
    templateUrl: "./app/messages.component.htm"
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]
})
 export class MessagesComponent {
    constructor(@Inject(MessagesService) messagesService: MessagesService) {
        messagesService.messages.subscribe(
            messages=> this.messages = messages,
            error=> console.log("Error"),
            () => console.log("Complete")
            );
    }
    private isRead: boolean = false;
    readMsg() {
        if (parseInt(jQuery(".main ul").css("right")) == 0)
            jQuery(".main ul").animate({ "right": jQuery(".main ul").width() }, 200, function () {
                jQuery("#back").fadeIn(200);
            });
        else {
            jQuery("#back").fadeOut(100);
            jQuery(".main ul").animate({ "right": 0 }, 200);
        }
        //console.log("hi");
        this.isRead = true;

    }
}

 