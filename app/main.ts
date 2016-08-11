import {bootstrap} from "angular2/platform/browser";
import { enableProdMode } from "angular2/core";
import {HTTP_PROVIDERS } from "angular2/http";
//import { Http, HTTP_BINDINGS } from "angular2/http";
import { MessagesComponent} from "./messages.component";
import { MessagesService} from "./messages.service";
enableProdMode();
bootstrap(MessagesComponent,[
    HTTP_PROVIDERS,
    //HTTP_BINDINGS,
    MessagesService
]);