# Countdown Champ
Udemy course for React and Redux

This app is all in React, it uses local state to update whatever was entered into the user's input and change the countdown date. It uses Maths to workout the difference between the entered date and now. I have used the deadline of our project as the countdown date.

## State steps:
1. Create the constructor in the class of App
2. set up the initial state
3. Then think about the setState method, what do you want to call it, what makes sense, and what will it be changed to.
4. Pass the method to the button via an anonymous function eg: 

``
<button onClick={() => this.changeDeadline() }>Submit</button>
``

5.set up the onChange event on the input, this allows us to read the input. eg:

``
onChange={ event=>console.log('event', event.target.value) }
``

6. Adding props

7. Calculating the time until

8. Hooking with Lifecycle Methods 
  -ComponentDidMount
  -ComponentWillMount
  
9. Adding helper methods with ternary expressions

### Notes on this tutorial:
React Components - re-usable and independent pieces of React code that comprise the User Interface.

ES6 importing and exporting - a new syntax for sharing code between separate files. Used in cases like `import React from ‘react’`

State - the pertinent data to an application. Each component has its local state as long as you declare add the constructor to a Component and declare its state object.

Updating State - When updating state, make sure to never mutate state directly. Doing so will lead to fatal errors in your application. Instead, re-declare new instances of state arrays or objects and use the setState() function to update state.

Props - similar to state, except this data inherits from parent component specifying pieces of state as properties.

LifeCycle Methods - events in React components that trigger in cases such as rendering on or off the screen, or during state updates. One example is the `componentDidMount()` lifeCycle hook.




