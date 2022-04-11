const {
  makeFeedingRation,
} = require('../codingParadigms/utils/makeFeedingRation');

const classCreator = (type) => {
  return {
    [type]: class {
      constructor(name, weight, activity) {
        if (type === 'Cat') {
          [this.name, this.weight, this.activity] = [name, weight, activity];
        } else if (type === 'Turtle') {
          [this.name] = [name];
        }
      }
    },
  }[type];
};

const pet = (type) =>
  class Pet extends classCreator(type) {
    #petType = super.constructor.name;
    #feeding = {
      Cat: makeFeedingRation(),
      Turtle(name) {
        return `Give ${name} much food as it can eat in half an hour.`;
      },
    };
    #recommendations = {
      Cat: {
        low: 'The cat needs to get healthy food;',
        medium: 'The cat needs to be stroked regularly;',
        high: 'Need to play with the cat;',
      },
      Turtle: `Don't down the turtle on the floor.`,
    };
    #feedingCalculation = () => {
      if (this.#petType === 'Cat') {
        const amountOfFeed = this.#feeding[this.#petType].get(this.weight)[
          this.activity
        ];
        return `${this.name} needs ${amountOfFeed} grams of food per day`;
      } else if (this.#petType === 'Turtle') {
        return this.#feeding[this.#petType](this.name);
      }
    };
    #prepareRecommendation = () => {
      if (this.#petType === 'Cat') {
        return this.#recommendations[this.#petType][this.activity];
      } else if (this.#petType === 'Turtle') {
        return this.#recommendations[this.#petType];
      }
    };
    getFeedingInfo = () => this.#feedingCalculation();
    getRecommendations = () => this.#prepareRecommendation();
  };

const myPet = (type, name, weight, activity) => {
  const newPet = pet(type);
  return new newPet(name, weight, activity);
};

myPet('Cat', 'Uksi', 3, 'low').getFeedingInfo(); //?
myPet('Turtle').getRecommendations(); //?
