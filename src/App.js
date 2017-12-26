import React, { Component } from 'react';
import './App.css'

//classes are made for their object orientated capability
class App extends Component {
	//the constructor allows us to have local state within our class
	//props refers to inherited data from a component
	constructor(props) {
		super(props);

		this.state = {
			deadline: 'January 7, 2018', //set up the initial state
			newDeadline: '' //set up another key with an empty string
		} //these can be a string, number, or another object etc //calling this.state.deadline will take the this that we've called and we can place in any date we like
	}

	//a method that changes the state, we need to use the setState() method, never mutate or change state directly. this.setState() method helps us create a new object

	//we then add this method to the button on the onClick

	//we need to add an anonymous function allows us to call it just once, so that it doesn't loop and crash the app
	changeDeadline() {
		console.log('state', this.state);
		this.setState({ deadline: this.state.newDeadline });
	}


	render(){
		return (
		<div className="App">
			<div className="App-title">Countdown to { this.state.deadline }</div> {/*this is calling the initial state above */}
			<div>
				<div className="Clock-days" >14 days</div>
				<div className="Clock-hours">30 hours</div>
				<div className="Clock-mins">15 mins</div>
				<div className="Clock-secs">20 secs</div>
			</div>

			<div>
				{/*the input is asking for a new date*/}
				{/*We want to collect the input of the new date*/}
				{/*Then call the changeDeadline() method on the submit button */}
				<input 
					placeholder='new date' 
					onChange={ event => this.setState({ newDeadline: event.target.value }) }/> 
				<button onClick={ () => this.changeDeadline() }>Submit</button> 
			</div>
		</div>
		)
	}

}

//it's it's own component and can now be reused
export default App;