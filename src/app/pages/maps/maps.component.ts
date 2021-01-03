import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  location: any;
  constructor() { }

  ngOnInit(): void {
    this.setGoogleMap();
  }


  setGoogleMap() {

    this.location = {
      latitude: 18.520430,
      longitude: 73.856743,
      zoom: 12,
      marker: {
        latitude: 18.520430,
        longitude: 73.856743,
        label: {
          color: '#CC0000',
          fontFamily: '',
          fontSize: '18px',
          fontWeight: 'bold',
          text: 'Red Themes',
        }
      }
    };
  }
}
