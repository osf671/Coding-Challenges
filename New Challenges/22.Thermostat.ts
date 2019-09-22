class Thermostat {

    constructor(public farenheit: number) {
      this.farenheit = farenheit;
    }
  
    get temperature() {
      return 5/9 * (this.farenheit - 32);
    }
  
    set temperature(celcius) {
      this.farenheit = celcius * 9.0/5 + 32;
    }
  }
  
  const thermos = new Thermostat(80); 
  let temp = thermos.temperature;
  console.log(temp)
  thermos.temperature = 30; // in C
  temp = thermos.temperature; 
  console.log(temp)