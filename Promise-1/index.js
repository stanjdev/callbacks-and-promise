// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("--- Oops ---");
    resolve('>>> Success! <<<');
    resolve('>>> Success! <<<');
    reject("--- Oops ---");
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
  // The .catch() runs first, and then the reject function is called

// **2)** What happens when you call both `resolve` and `reject`? Test this.
  // The .catch() runs, and the reject() function is called. The resolve() does not even get called.

// **3)** Does the order matter you call resolve and reject matter? Test this.
  // Yes, whichever one gets read first, is the only one that is called.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
  // It only calls either the resolve or reject once. It seems to return and stop everything after.
