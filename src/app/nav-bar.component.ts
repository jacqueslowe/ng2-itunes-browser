import { Component} from '@angular/core';
import { Constants } from './constants';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html' 
//  styleUrls: ['./app.component.css']
})

export class NavBarComponent { 
  constructor( private constants:Constants, private router: Router) 
  {}

getTitleStyle(routeName:string) {
    if (this.router.url.indexOf(routeName) != -1) 
      return {color: 'orange'}
    
    return {color: 'black'}
  }
}