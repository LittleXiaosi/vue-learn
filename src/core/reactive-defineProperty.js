let data = { price: 5, quantity: 2,obj:{a:1} };
let target = null;

// Our simple Dep class
class Dep {
  constructor() {
    this.subscribers = [];
  }
  depend() {
    if (target && !this.subscribers.includes(target)) {
      // Only if there is a target & it's not already subscribed
      this.subscribers.push(target);
    }
  }
  notify() {
    this.subscribers.forEach(sub => sub());
  }
}

// Go through each of our data properties
Object.keys(data).forEach(key => {
  let internalValue = data[key];

  // Each property gets a dependency instance
  const dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      debugger;
      dep.depend(); // <-- Remember the target we're running
      return internalValue;
    },
    set(newVal) {
      debugger;
      internalValue = newVal;
      dep.notify(); // <-- Re-run stored functions
    }
  });
});

// Go through each of our data properties
Object.keys(data.obj).forEach(key => {
    let internalValue = data[key];

    // Each property gets a dependency instance
    const dep = new Dep();

    Object.defineProperty(data, key, {
        get() {
            debugger;
            dep.depend(); // <-- Remember the target we're running
            return internalValue;
        },
        set(newVal) {
            debugger;
            internalValue = newVal;
            dep.notify(); // <-- Re-run stored functions
        }
    });
});

// The code to watch to listen for reactive properties
function watcher(myFunc) {
  target = myFunc;
  target();
  target = null;
}

watcher(() => {
  data.total = data.price * data.quantity;
});

console.log("total = " + data.total)
data.price = 20
console.log("total = " + data.total)
data.quantity = 10
console.log("total = " + data.total)