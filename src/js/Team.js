/* eslint-disable no-plusplus */

import Person from './Person';

export default class Team {
  constructor(...args) {
    this.team = [];
    this.team.push(...args);
  }

  * [Symbol.iterator]() {
    let count = 0;
    const { team } = this;
    while (count < team.length) {
      yield team[count++];
    }
  }
}

// const character = new Person('Лучник', 'Bowman');
