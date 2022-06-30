import { NotificationData } from './../shared/notification-data.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'], 
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity:0,
          transform: 'translateY(5px)'
        }),
        animate('150ms 100ms ease-out')
      ]), 
      transition(':leave', [
        animate(125, style ({
          opacity:0,
          transform:'scale(0.85)',
          //transform: 'translateY(5px)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notification: NotificationData[]

  Timeout: any;


  constructor(private notificationService: NotificationService) { 
  }

  ngOnInit(): void {
    this.notificationService.notifications.subscribe((notification: NotificationData)=> {
      this.notification = Array(notification);

      clearTimeout(this.Timeout);

      this.Timeout = setTimeout(()=>{
        this.notification= null;
      }, notification.duration)
    })


  }

}
function translateY(arg0: number, px: any): string | number {
  throw new Error('Function not implemented.');
}

