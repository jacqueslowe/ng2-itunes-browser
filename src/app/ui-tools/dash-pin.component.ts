import {Component} from '@angular/core';

@Component({
    selector: 'dash-pin',
    templateUrl: './dash-pin.component.html',
    styleUrls: ['./dash-pin.component.css'],
    inputs: ['severity', 'count', 'iconName', 'name']
})

export class DashPinComponent {
    severity: string; 
    cout: string;
    iconName: string;
    name: string;
    ngOnInit() 
    { 
        console.log("OnInit: iconName=" + this.iconName); 
    }
    getBootstrapClass()
    {   //class="panel-body bg-success text-success"
        return " bg-"+this.severity+" text-"+this.severity;
    }
}