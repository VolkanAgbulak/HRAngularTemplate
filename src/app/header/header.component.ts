import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `  
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal"><a class="p-2 text-dark" [routerLink]="[ '']">HR Template</a></h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2 text-dark" [routerLink]="[ '/abous-us']">About Us</a>
      <a class="p-2 text-dark" [routerLink]="[ '/candidates']">Candidates</a>
    </nav>
  </div>
  `,
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
