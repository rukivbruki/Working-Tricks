const {
  makeFeedingRation,
} = require('../codingParadigms/utils/makeFeedingRation');

abstract class Pet {
  protected abstract recommendations: {} | string;

  protected constructor(
    public name: string,
    public weight?: number,
    public activity?: string,
  ) {}

  protected abstract feeding(arg?: string): void;

  protected abstract feedingCalculation(): void;

  protected abstract prepareRecommendation(): void;
}

class Cat extends Pet {
  protected recommendations = {
    low: 'The cat needs to get healthy food;',
    medium: 'The cat needs to be stroked regularly;',
    high: 'Need to play with the cat;',
  };

  constructor(
    public name: string,
    public weight: number,
    public activity: string,
  ) {
    super(name);
  }

  getFeedingInfo = () => this.feedingCalculation();

  getRecommendations = () => this.prepareRecommendation();

  protected feeding() {
    return makeFeedingRation();
  }

  protected prepareRecommendation = () => {
    const recommendations = this.recommendations;
    return recommendations[this.activity as keyof typeof recommendations];
  };

  protected feedingCalculation() {
    const feeding = this.feeding().get(this.weight);
    return `${this.name} needs ${
      feeding[this.activity as keyof typeof feeding]
    } grams of food per day`;
  }
}

class Turtle extends Pet {
  protected recommendations = `Don't down the turtle on the floor.`;

  constructor(public name: string) {
    super(name);
  }

  getFeedingInfo = () => this.feedingCalculation();

  getRecommendations = () => this.prepareRecommendation();

  protected feeding = (name: string) =>
    `Give ${name} much food as it can eat in half an hour.`;

  protected feedingCalculation = () => this.feeding(this.name);

  protected prepareRecommendation = () => this.recommendations;
}

let turtle = new Turtle('Lapsi');
turtle.getFeedingInfo(); //?
turtle.getRecommendations(); //?

let cat = new Cat('Uksi', 3, 'low');
cat.getFeedingInfo(); //?
cat.getRecommendations(); //?
