import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Health(str) {
  return str * 20;
}
function Mana(int) {
  return int * 10;
}
function Att(str, int) {
  return  str * 5 + int * 3 ;
}
function Image(str, int, agi) {
  if (str > int && str > agi) {
    return 'https://i.pinimg.com/474x/26/56/24/26562489e601c2179234a8a45942365f--knight-lion-art.jpg';
  } else if (int > str && int > agi) {
    return 'https://i.pinimg.com/474x/f9/61/0a/f9610ad971b0b1baa9e1660868c727de.jpg';
  } else if (agi > str && agi > int) {
    return 'https://i.pinimg.com/474x/79/1f/7d/791f7ded88ef3a2afcc476951fb20890.jpg';
  } else {
    return 'https://i.pinimg.com/474x/dd/61/75/dd617579a1f6f252afdf7366912755c6--dragon-age-inquisition-the-tower-tarot.jpg';
  }
}
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string): void {
    let str;
    let int;
    let agi;
    let hp ;
    let mana;
    let atk;
    let img;
    name = name.trim();
    str = randomInt(7, 15);
    int = randomInt(7, 15);
    agi = randomInt(7, 15);
    hp = Health(str);
    mana = Mana(int);
    atk = Att(str, int);
    img = Image(str, int, agi);
    if (!name) { return; }
    this.heroService.addHero({ name, str, int, agi, hp, mana, atk, img } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });    }


  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe(); }
}
