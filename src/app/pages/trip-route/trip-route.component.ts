import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-route',
  templateUrl: './trip-route.component.html',
  styleUrls: ['./trip-route.component.scss']
})
export class TripRouteComponent implements OnInit {

  constructor() { }

  lat = 51.5074; // Latitude of the map center
  lng = -0.1278; // Longitude of the map center
  zoom = 10; // Zoom level
  markerLat = 51.5074; // Latitude of the marker
  markerLng = -0.1278; // Longitude of the marker

  ngOnInit(): void {
  }

}
