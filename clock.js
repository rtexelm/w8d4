class Clock {
    constructor() {
      // 1. Create a Date object.
      let date = new Date();
      // 2. Store the hours, minutes, and seconds.
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      // 3. Call printTime.
      this.printTime();
      // 4. Schedule the tick at 1 second intervals.
      setInterval(this._tick,1000);
    };
  
    printTime() {
      // Format the time in HH:MM:SS
      const formatTime = `${this.hours}:${this.minutes}:${this.seconds}`
      // console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
      // Use console.log to print it.
      console.log(formatTime);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      clock.seconds++;
      // 2. Call printTime.
      clock.printTime();
    }
  }
  
  const clock = new Clock();
  
