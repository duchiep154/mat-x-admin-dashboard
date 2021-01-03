import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.scss']
})

export class NotificationMenuComponent implements OnInit {

  notificationData = [
    {
      img:'/assets/images/robert.jpg',
      text:'100+ New use Joined this week. Joined this week.',
      time: '5 minutes ago'
    },
    {
      img:'https://www.bushtheatre.co.uk/wp-content/uploads/2017/10/ChimimbaLoisSquare.jpg',
      text:'100+ New use Joined this week.',
      time: '7 minutes ago'
    },
    {
      img:'https://placeimg.com/50/50/people/3',
      text:'Mike John Just responded your email',
      time: '10 minutes ago'
    },
    {
      img:'https://placeimg.com/50/50/people/4',
      text:'100+ New use Joined this week. Joined this week.',
      time: '5 minutes ago'
    },
    {
      img:'/assets/images/robert.jpg',
      text:'100+ New use Joined this week. Joined this week.',
      time: '5 minutes ago'
    },
  ]
  constructor() {}

  ngOnInit(): void {
  }

}
