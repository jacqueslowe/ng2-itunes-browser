import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'error404-component',
  template: `
    <article class="template animated slideInRight">
      <h4>Page Not Found!</h4>
      <div>Not sure where we are...</div>
    </article>
  `
})
export class PageNotFoundComponent { }