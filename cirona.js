class Result {
    constructor(){
      this.timestamp;
      this.diceOne;
      this.diceTwo;
    };
  
    addResult(){
      const random1 = Math.round(Math.random() * 6) + 1;
      const random2 = Math.round(Math.random() * 6) + 1;
      const time = new Date();
      const hour = time.getHours();
  
      this.timestamp = hour;
      this.diceOne = random1;
      this.diceTwo = random2;
  
      console.log(`${this.timestamp} You rolled a ${this.diceOne} and ${this.diceTwo}`)
    }
  }

  const add = new Result();

  add.addResult()