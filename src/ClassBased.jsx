import React, { Component } from 'react'

export default class ClassBased extends Component {
	// constructor(){
	// 	super()
	// 	this.state={
	// 		count:0
	// 	}
	// }
	state={
		count:0
	}
	increment = () => {
		this.setState({ count: this.state.count +1})
	}
	decrement = () => {
		this.setState({ count: this.state.count -1})
	}

	render() {
		return (
			<div>
				<button onClick= { ()=> this.setState({ count: this.state.count +1})} >+</button>
				<h1> {this.state.count} </h1>
				<button onClick= {this.decrement} >-</button>
				<h2> {this.props.name} - {this.props.surname} </h2>
			</div>
		)
	}
}
