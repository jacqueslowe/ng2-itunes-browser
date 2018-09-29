import {Component} from '@angular/core';

@Component({
    selector: 'dash-pin',
    templateUrl: './dash-pin.component.html',
    inputs: ['severity', 'count', 'iconName', 'name']
})

export class GuidePinComponent {
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