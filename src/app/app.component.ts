import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'World'// + VERSION.major;
  msg = 'Awesome!'
  langs:string[] = ['Python','Java','C#','Ruby','Typescript']
}
