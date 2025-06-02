export class MyService {
  constructor(public name: String) { }
  getName() {

    return this.name;
  }

}

const myServicea = new MyService("kamilo");
const myServiceb = new MyService("alca");
console.log(myServiceb === myServicea)

console.log(myServicea.getName())
console.log(myServiceb.getName())
