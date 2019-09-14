class car {
  private id: number;

  constructor(
    public color: string = "blue",
    public make: string,
    public model?: string,
    public year?: number
  ) {
    this.make = `${this.make[0].toUpperCase()}${this.make
      .substr(1)
      .toLowerCase()}`;
    this.id = Math.floor(Math.random() * 100);
  }

  honk() {
    console.log("beep beep");
  }

  aboutMe() {
    const constructAboutMeString = () => {
      return `color: ${this.color} - make: ${this.make}`;
    };
    console.log(constructAboutMeString());
  }
}

class honda extends car {
  constructor(color: string, year: number, model: string) {
    super(color, "honda", model, year);
  }
}

class civic extends honda {
  public speed = 0;
  constructor(color: string, year: number) {
    super(color, year, "Civic");
  }

  goFaster() {
    this.speed = this.speed + 10;
  }
}

class explorer extends car {
  constructor(color: string, year: number) {
    super(color, "Ford", "Explorer", year);
  }
}

const myCar = new car("white", "acura", "rsx", 2019);
const mySecondCar = new car("black", "jeep", "wranger", 2004);
myCar.honk();
myCar.aboutMe();

const c = new civic("white", 2012);

console.log(c);
console.log(c.speed);
c.goFaster();
c.goFaster();
c.goFaster();
console.log(c.speed);

console.log(c);

const e = new explorer("fusia", 1967);
console.log(e);

const arr1 = [1, 2, 3, 4, 5];
const arr = new Array(1, 2, 3);
