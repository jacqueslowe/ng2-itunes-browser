import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'music-navigator',
  templateUrl: './music-navigator.component.html',
  styleUrls: ['./music-navigator.component.css']
})

export class MusicNavigatorComponent {
    constructor( private router: Router ){};
    isRouteActive(myRoute:string)
    {
        if( this.router.url.indexOf(myRoute.toLowerCase()) != -1 )
            return "active";
        else
            return "default";
    }
    getActiveTitle()
    {
        if( this.router.url.indexOf("Search".toLowerCase()) != -1 )
        {
            return "Search iTunes for Track";
        }
        else if( this.router.url.indexOf("Add".toLowerCase()) != -1 )
        {
            return "Add a New music Track";
        }
        else if( this.router.url.indexOf("Details".toLowerCase()) != -1 )
        {
            return "Details Track Info";
        }
        else
        {
            return "Search, add and view details of music"
        }
    }
}