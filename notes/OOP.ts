class house {
  id: number; 


  constructor(
   public material: string,
   public color: string,
   public size: string,
   public bedrooms: number,
   public bathrooms: number,
   public finishedBasement: boolean,
){
  this.material = `${this.material[0].toUpperCase()}${this.material
    .substr(1)
    .toLowerCase()}`;
this.id= Math.floor(Math.random()* 100)
}
}

class house2 extends house{
  constructor(material: string, color: string, size: string, bedrooms: number, bathrooms: number){
    super(material, color, size, bedrooms, bathrooms, true);
  }
}

const houseFirstOption = new house ('brick', 'brown', '1800 sf', 4, 2, true);
console.log(houseFirstOption)

const houseSecondOption = new house2 ('concrete', 'black', '2400 sf', 3, 4);
console.log(houseSecondOption)










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
console.log(myCar)
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
