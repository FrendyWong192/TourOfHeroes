import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Morrison', str: 15, int: 9, agi: 12, hp: 300, mana: 90, atk: 102,
        img: 'https://i.pinimg.com/474x/26/56/24/26562489e601c2179234a8a45942365f--knight-lion-art.jpg'},
      { id: 2, name: 'Leandra', str: 11, int: 13, agi: 12, hp: 220, mana: 130, atk: 94,
        img: 'https://i.pinimg.com/474x/f9/61/0a/f9610ad971b0b1baa9e1660868c727de.jpg'},
      { id: 3, name: 'Miriya' , str: 9, int: 9, agi: 15, hp: 180, mana: 90, atk: 72,
        img: 'https://i.pinimg.com/474x/79/1f/7d/791f7ded88ef3a2afcc476951fb20890.jpg'},
      { id: 4, name: 'Celerion' , str: 13, int: 7, agi: 10, hp: 260, mana: 70, atk: 86 ,
        img: 'https://i.pinimg.com/474x/26/56/24/26562489e601c2179234a8a45942365f--knight-lion-art.jpg'},
      { id: 5, name: 'Magnus' , str: 10, int: 10, agi: 10, hp: 200, mana: 100, atk: 80,
        img: 'https://i.pinimg.com/474x/dd/61/75/dd617579a1f6f252afdf7366912755c6--dragon-age-inquisition-the-tower-tarot.jpg'},
      { id: 6, name: 'Morgana' , str: 12, int: 14, agi: 8, hp: 240, mana: 140, atk: 102,
        img: 'https://i.pinimg.com/474x/f9/61/0a/f9610ad971b0b1baa9e1660868c727de.jpg'},
      { id: 7, name: 'Dyrona', str: 12, int: 10, agi: 12, hp: 240, mana: 100, atk: 90, img:
        'https://i.pinimg.com/474x/dd/61/75/dd617579a1f6f252afdf7366912755c6--dragon-age-inquisition-the-tower-tarot.jpg'},
      { id: 8, name: 'Dulahan' , str: 14, int: 15, agi: 7, hp: 280, mana: 150, atk: 115, img:
        'https://i.pinimg.com/474x/f9/61/0a/f9610ad971b0b1baa9e1660868c727de.jpg'},
      { id: 9, name: 'Martoise', str: 11, int: 7, agi: 15, hp: 220, mana: 70, atk: 76, img:
        'https://i.pinimg.com/474x/79/1f/7d/791f7ded88ef3a2afcc476951fb20890.jpg'},
      { id: 10, name: 'Corian', str: 7, int: 15, agi: 15, hp: 140, mana: 150, atk: 80, img:
        'https://i.pinimg.com/474x/dd/61/75/dd617579a1f6f252afdf7366912755c6--dragon-age-inquisition-the-tower-tarot.jpg'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
