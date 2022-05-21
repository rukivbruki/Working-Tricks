interface AbstractFactory {
  Car(): Car;

  Moto(): Moto;
}

interface Car {
  model(model: any): string;
}

interface Moto {
  model(model: any): string;
}

class TokyoCarFactory implements AbstractFactory {
  public Car(): Car {
    return new Mazda();
  }

  public Moto(): Moto {
    return new Suzuki();
  }
}

class Mazda implements Car {
  public model(model: any): string {
    return `Mazda ${model}`;
  }
}

class Suzuki implements Moto {
  public model(model: any): string {
    return `Suzuki ${model}`;
  }
}

function clientCode(factory: AbstractFactory) {
  return factory;
}

const Prod = clientCode(new TokyoCarFactory());

Prod.Moto().model('6'); //?
