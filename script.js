class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compare = function (user) {
    if (this.age > user.age) {
      return this.firstName + `è più vecchio di ` + user.firstName;
    } else {
      return this.firstName + `è più giovane di ` + user.firstName;
    }
  };
}

const userPrimo = new User("silvio", "berlu", 8, "namibia");
const userSecondo = new User("vito", "ciancimino", 11, "corleone");
userPrimo.compare(userSecondo);
console.log(userPrimo.compare(userSecondo));
