import { NotificationData } from './notification-data.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification$: Subject<NotificationData> = new Subject();

  get notifications(){
    return this.notification$.asObservable();
  }

  constructor() { }

  show(text: string, duration = 1500){
    this.notification$.next({ text, duration });
  }
}
