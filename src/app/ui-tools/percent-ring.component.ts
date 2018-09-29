import {Component} from '@angular/core';

@Component({
    selector: 'percent-ring',
    templateUrl: './percent-ring.component.html',
    styleUrls: ['./percent-ring.component.css'],
    inputs: ['severity', 'percent', 'name', 'paddingTop', 'size']
})

export class PercentRingComponent {
    severity: string; 
    percent: string;
    name: string;
    paddingTop:string;
    paddingBottom:string;
    size:string;

    getBootstrapClass()
    {   //class="c100 p50 big center green"
       // return "c100 p"+this.percent+ " medium center " +this.severity;
       return "c100 p50 small center green";
    }

    getPanelHeadingPaddingTop()
    {
        return "padding-top:" +this.paddingTop+";";
    }
    getPanelHeadingPaddingBottom()
    {
        return "padding-bottom:" +this.paddingBottom+";";
    }
}