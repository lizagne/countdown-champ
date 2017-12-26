# Countdown Champ
Udemy course for React and Redux

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


