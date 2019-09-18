class car {
  private id: number;

  constructor(
    public color: string = "blue",
    public make: string,
    public model?: string,
    public year?: number,
    public battery?: string
  ) {
    this.color = `${this.color[0].toUpperCase()}${this.color
      .substr(1)
      .toLowerCase()}`;

    this.make = `${this.make[0].toUpperCase()}${this.make
      .substr(1)
      .toLowerCase()}`;

    this.model = `${this.model[0].toUpperCase()}${this.model
      .substr(1)
      .toLowerCase()}`;
    
    this.id = Math.floor(Math.random() * 100);
  }

  honk() {
    console.log("beep beep");
  }

  aboutMe() {
    const constructAboutMeString = () => {
      return `color: ${this.color}
make: ${this.make}`;
    };
    console.log(constructAboutMeString());
  }
}

class toyota extends car {
  constructor(color: string, year: number, battery: string) {
    super(color, "toyota",'prius', year, battery);
  }

  honk() {
    super.honk();
    console.log("beep, beep, beep, beep");
  }
}
const myToyota = new toyota(undefined, 2008, 'hybrid')
console.log(myToyota)

class prius extends toyota {
  public speed = 0;
  public solar_roof;
  constructor(color: string, battery: string, solar_roof: boolean) {
    super(color, 2019, battery);
    this.solar_roof = solar_roof;
  }

  goFaster() {
    this.speed = this.speed + 10;
  }
}

const myPrius = new prius('red', 'hybrid', true)
console.log(myPrius)

class explorer extends car {
  constructor(color: string, year: number) {
    super(color, "Ford", "Explorer", year);
  }
}

const myCar = new car("white", "acura", "rsx", 2019);
const mySecondCar = new car("black", "jeep", "wranger", 2004);
myCar.honk();
myCar.aboutMe();

const c = new prius("white", 'hybrid', false);

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
console.log(arr)