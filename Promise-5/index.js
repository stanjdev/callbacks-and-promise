function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    switch(timeOfDay) {
      case 'breakfast':
        resolve('eggs')
        break
      case 'lunch':
        resolve('chicken')
        break
      case 'dinner':
        resolve('steak')
        break
      default:
        reject("I don't eat between meal snacks!")
    }
  })
}

// whatToEat should return a promise.
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner'
// resolve the promise with your favorite food for that time.
// If the `timeOfDay` is anything else reject the promise with
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here:

whatToEat('lunch').then((message) => {
  console.log(message)
}).catch((err) => {
  console.log(err)
})

// Handle this Promise:
whatToEat('elevens').then((message) => {
  console.log(messge)
}).catch((err) => {
  console.log(err)
})
