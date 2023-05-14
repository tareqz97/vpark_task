import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    constructor() { }

    sideBarList = [
        {
            label: "Home",
            icon: "fa-house",
            routerLink: "home"
        },
        {
            label: "Operation",
            icon: "fa-right-left",
            routerLink: "operation"
        },
        {
            label: "Map",
            icon: "fa-map-location-dot",
            routerLink: "map"
        },
        {
            label: "Reports",
            icon: "fa-chart-simple",
            routerLink: "reports"
        },
        {
            label: "Control Panel",
            icon: "fa-sliders",
            routerLink: "control-panel"
        },
    ]

    ngOnInit(): void {
    }

}
