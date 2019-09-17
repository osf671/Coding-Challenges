class stopwatch {
  // Not sure how to initialize all the parameters to 0;

  private startTime: Date;
  private endTime: Date;
  private running: boolean;
  public method = "seconds";

  public start() {
    if (this.running) {
      throw new Error("Stopwatch has already started");
    }
    this.running = true;
    this.startTime = new Date();
  }

  public stop(): number {
    if (!this.running) {
      throw new Error("Stopwatch is not started.");
    }
    this.running = false;
    this.endTime = new Date();
    return (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  }

  public reset() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
  }

  // are getter/setter applicable in this class?
}

let OURDATA;

fetch("https://api.mockaroo.com/api/0c501690?count=10&key=ec35dd50")
  .then(data => {
    return data.json();
  })
  .then(data => {
    OURDATA = data;
    console.log("inTHEN", data);
  });

console.log("AFTER FETCH", OURDATA);
