import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class EmplFormService {
    notifyToOpen= new EventEmitter()
    notifyToClose= new EventEmitter()
}