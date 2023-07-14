import React from "react";
import ReactDOM from "react-dom";
import "./style.css" /* Needed for styles and images with CRA when using "Create React App"*/
import App from "./App";


ReactDOM.render(<App />,document.getElementById("root"));



/* 
###
Inside JSX, any thing inside {} will be treated as reular JavaScript code 

### Prop Quiz: (Prop is properties)
1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object! 


### Destructuring props
const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}
I can console.log(props.name)
or
const {img, name} = person
console.log(name)

example:
export default function Contact({props}) {
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}
does the same thing as :
export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}


### && (logical AND operation)
In JavaScript, the && operator performs a logical AND operation. It evaluates the operands from left to right and returns the value of the second operand if the first operand is truthy. If the first operand is falsy, it short-circuits and returns the falsy value itself, without evaluating the second operand.

### JavaScript functions:
const nums = [1, 2, 3, 4, 5]
const newNums = nums.map( num => Math.pow(num,2))


const nums = [1, 2, 3, 4, 5]
const squares = nums.map(function(num) {
    return Math.pow(num,2)
})
Arrow functions have a more concise syntax and automatically bind the this value, which can be useful in certain contexts. They are especially handy when the callback function is short and simple.

Regular anonymous functions provide more flexibility, allowing for more complex logic and access to the arguments object. They can also be advantageous when you need to use the this keyword in the callback function.



### map() challenge
The .map() method is a built-in higher-order function(that means it takes another function as a parameter) in JavaScript that is used to iterate over an array and transform its elements into a new array.

Challenge 1:
Given an array of numbers, return an array of each number, squared

const nums = [1, 2, 3, 4, 5]
   -->       [1, 4, 9, 16, 25]

const num3 = nums.map(function(x){
    return x*x
})
console.log(num3)  
or a short cut:
const num2 = nums.map(x => x*x)
console.log(num2)



Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized

const names = ["alice", "bob", "charlie", "danielle"]
   -->        ["Alice", "Bob", "Charlie", "Danielle"]

const names2 = names.map(function(x){
    return (
        x[0].toUpperCase()+x.substring(1)
    )
})
console.log(names2)

Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
   -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

const pokemon2 = pokemon.map(function(mon) => {
    return `<p>${mon}</p>`   // this is Template literals (Template strings)
})
const pokemon3 = pokemon.map(mon => `<p>${mon}</p>`) //because there's only 1 parameter, so can do mon =>, also, arrow functions in JavaScript have an implicit return behavior, so if only one line code in return, can do => `<p>${mon}</p>`



### .map() quiz
1. What does the `.map()` array method do?
Returns a new array. Iterate through the old array, whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.
*/
