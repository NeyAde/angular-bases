import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDesciption(): string{
    return `${ this.name }` +`-`+ `${this.age}`;
  }

  changedAge():void{
    this.age = 25;
  }

  changedName():void{
    this.name = 'Spiderman';

  }

  resetForm():void{
    this.name ='ironman';
    this.age = 45;
  }
}
