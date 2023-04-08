# JS
Learning JavaScript

<hr/>

## data types in js

On the basis of How data stored in memory and how data will be access from memry <br/>
Data types in JavaScript are two types. <br/><br/>
```
1. Primitive DataTypes

    7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



2. Non Primitive/Reference Datatypes

    Array, Objects, Functions
    
 ```
 
 ## Memory in Js 

Stack memory(Primitive data type) <br/>
Heap (Non-Primitive data type)


## How to generate four digit random number
to using following code

```
const min = 1000
const max = 9999

console.log(Math.floor(Math.random() * (max - min + 1))+min) // we can also use this for otp

```

## What is Promise?

A promise is an object that represents a value that may not be available yet but will be resolved at some point in the future. Promises are used to handle asynchronous operations, such as making network requests or reading files.

A Promise has three states:

1. Pending: This is the initial state of a promise. It means that the asynchronous operation has not yet completed, and the promise is waiting for the result.

2. Fulfilled: This means that the asynchronous operation has completed successfully, and the promise has resolved with a value.

3. Rejected: This means that the asynchronous operation has failed, and the promise has rejected with a reason (an error message, for example).

Let's take an example of fetching data from an API using promises and see how each stage works.

```
// Creating a promise object

const promiseObj = new Promise((resolve, reject) => {

  // Making a network request to fetch data

  fetch('https://example.com/api/data')

    .then(response => {

      // If the response is successful, resolve the promise with the data

      if (response.ok) {

        return response.json();

      }

      // If there is an error, reject the promise with the error message

      throw new Error('Network response was not ok');

    })

    .then(data => {

      // When the data is successfully retrieved, resolve the promise with the data

      resolve(data);

    })

    .catch(error => {

      // If there is an error at any stage, reject the promise with the error message

      reject(error);

    });

});

// Using the promise object

promiseObj.then(data => {

  console.log(data); // Log the data to the console

}).catch(error => {

  console.error(error); // Log the error to the console

});
```

In the above example, we create a new promise object and pass a callback function with two parameters: resolve and reject. Inside the callback function, we make a network request to fetch data from an API. If the response is successful, we resolve the promise with the data using the resolve function. If there is an error, we reject the promise with the error message using the reject function.

Once the promise object is created, we can use the then method to handle the resolved value and the catch method to handle the rejected value. When the promise is in the pending stage, the then and catch methods are not executed. When the promise is fulfilled, the then method is executed with the resolved value as its parameter. When the promise is rejected, the catch method is executed with the rejected value as its parameter.

In this way, promises provide a way to handle asynchronous operations in a more elegant and intuitive way, making our code more readable and easier to maintain.
