
class stopwatch {
    // Not sure how to initialize all the parameters to 0;
    
    constructor(
        public startTime: Date,
        public endTime: Date,
        public running: boolean,
        public duration: number
) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.running = running;
    this.duration = duration;
    }

    start() {
        if (this.running) {
            throw new Error('Stopwatch has already started');
        }

        this.running = true;

        this.startTime = new Date();
    };

    stop() {
        if (!this.running) {
            throw new Error('Stopwatch is not started.')
        };

        this.running = false;
        
        this.endTime = new Date();

        const seconds = (this.endTime.getTime() - this.startTime.getTime() / 1000)

        this.duration += seconds;
    };

    reset() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
    };

    // are getter/setter applicable in this class?
}



