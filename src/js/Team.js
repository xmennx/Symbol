import { Character } from './Character';

export class Team {
  constructor() {
    this.characters = [];
    this.currentIndex = 0;
  }

  addCharacter(character) {
    if (!(character instanceof Character)) {
      throw new Error('Персонаж должен быть объектом типа Character');
    }
    this.characters.push(character);
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.currentIndex < this.characters.length) {
          return { value: this.characters[this.currentIndex++], done: false };
        } else {
          this.currentIndex = 0;
          return { done: true };
        }
      },
    };
  }
}