class MyService {

  // primerta didrenecia en java y es el constructor se escribe con constructor y no con public
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


// en el segundo caso vamos a crear un patron singleton
class MyService_private_constructor {



  private static instance: MyService_private_constructor | null = null;

  constructor(public name: String) { }


  // metodo
  getName() {

    return this.name;
  }


  static create(name: string) {
    if (!MyService_private_constructor.instance) {
      MyService_private_constructor.instance = new MyService_private_constructor(name);
    }
    return MyService_private_constructor.instance;
  }

}

console.log("camilo es el rey")

