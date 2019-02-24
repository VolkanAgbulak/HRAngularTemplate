import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  template: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Angular HR Template</title>
  </head>
  <body>
    <app-header></app-header>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  </body>
  </html>
  `,
})
export class AppComponent {
  title = 'angulariktemp';
}
