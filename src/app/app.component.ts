import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;

  incrementBy(value:number):void{
    this.counter += value;
  }

  reset():void{
    this.counter =10;
  }

}
