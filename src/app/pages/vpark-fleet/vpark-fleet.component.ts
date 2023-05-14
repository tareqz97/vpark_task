import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vpark-fleet',
    templateUrl: './vpark-fleet.component.html',
    styleUrls: ['./vpark-fleet.component.scss']
})
export class VparkFleetComponent implements OnInit {

    constructor() { }

    vehiclesList = [
        {
            showDetails: false,
            name: "Smart Vehicle 1",
            status: "warning",
            camera: {
                isOnline: true,
                isActive: true
            },
            network: {
                isAvailable: true,
                isActive: true
            },
            memory: {
                value: 20,
                status: "Normal"
            },
            cpu: {
                value: 70,
                status: "High"
            }
        },
        {
            showDetails: false,
            name: "Smart Vehicle 2",
            status: "active",
            camera: {
                isOnline: true,
                isActive: true
            },
            network: {
                isAvailable: true,
                isActive: true
            },
            memory: {
                value: 20,
                status: "Normal"
            },
            cpu: {
                value: 70,
                status: "High"
            }
        },
        {
            showDetails: false,
            name: "Smart Vehicle 3",
            status: "active",
            camera: {
                isOnline: true,
                isActive: true
            },
            network: {
                isAvailable: true,
                isActive: true
            },
            memory: {
                value: 20,
                status: "Normal"
            },
            cpu: {
                value: 70,
                status: "High"
            }
        },
        {
            showDetails: false,
            name: "Smart Vehicle 4",
            status: "danger",
            camera: {
                isOnline: true,
                isActive: true
            },
            network: {
                isAvailable: true,
                isActive: true
            },
            memory: {
                value: 20,
                status: "Normal"
            },
            cpu: {
                value: 70,
                status: "High"
            }
        },
        {
            showDetails: false,
            name: "Smart Vehicle 5",
            status: "danger",
            camera: {
                isOnline: true,
                isActive: true
            },
            network: {
                isAvailable: true,
                isActive: true
            },
            memory: {
                value: 20,
                status: "Normal"
            },
            cpu: {
                value: 70,
                status: "High"
            }
        },
        {
            showDetails: false,
            name: "Smart Vehicle 6",
            status: "danger",
            camera: {
                isOnline: true,
                isActive: true
            },
            network: {
                isAvailable: true,
                isActive: true
            },
            memory: {
                value: 20,
                status: "Normal"
            },
            cpu: {
                value: 70,
                status: "High"
            }
        },
        {
            showDetails: false,
            name: "Smart Vehicle 7",
            status: "danger",
            camera: {
                isOnline: true,
                isActive: true
            },
            network: {
                isAvailable: true,
                isActive: true
            },
            memory: {
                value: 20,
                status: "Normal"
            },
            cpu: {
                value: 70,
                status: "High"
            }
        },
        {
            showDetails: false,
            name: "Smart Vehicle 8",
            status: "danger",
            camera: {
                isOnline: true,
                isActive: true
            },
            network: {
                isAvailable: true,
                isActive: true
            },
            memory: {
                value: 20,
                status: "Normal"
            },
            cpu: {
                value: 70,
                status: "High"
            }
        },
        {
            showDetails: false,
            name: "Smart Vehicle 9",
            status: "danger",
            camera: {
                isOnline: true,
                isActive: true
            },
            network: {
                isAvailable: true,
                isActive: true
            },
            memory: {
                value: 20,
                status: "Normal"
            },
            cpu: {
                value: 70,
                status: "High"
            }
        },
    ]

    ngOnInit(): void {
    }

    closeAll(item: any){
        this.vehiclesList.forEach(e => {
            if(e != item)
            e.showDetails = false; 
        })
    }

}
