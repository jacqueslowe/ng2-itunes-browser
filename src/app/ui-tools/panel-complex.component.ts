import {Component} from '@angular/core';
import {City} from '../models/city.model';

@Component({
    selector: 'panel-complex',
    templateUrl: './panel-complex.component.html',
    styleUrls: ['./panel-complex.component.css'],
    inputs: ['city']
})
//Card Component itself
export class PanelComplexComponent {
 city: City; 
 visible = true;
 toggleView()
 {
    this.visible = !this.visible;
 }
}