const user = new Proxy({}, {
  set(target, prop, value) {
    if (typeof value !== "number") {
      throw new TypeError("Only numbers are allowed");
    }

    target[prop] = value;
    return true;
  }
});

user.age = 25;     
user.score = 100;

user.name = "Dev"; 
