import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero === hero ? this.selectedHero = undefined : this.selectedHero = hero ;
  }

  heroes = HEROES;
}
