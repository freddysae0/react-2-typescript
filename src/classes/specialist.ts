class DinoKeeper  {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi(): string {
    return `${this.name} says “hi”`;
  }
}

class Specialist extends DinoKeeper {
    
    experience: number;
    constructor(name , experience){
        super(name)
        this.experience = experience;
    }
    safetyQuote(): string {
        return `Never turn your back to the cage. Trust me, I have ${this.experience} years of experience`
    }
}

const employee1 = new DinoKeeper("Joe");
employee1.sayHi();

export default Specialist;
