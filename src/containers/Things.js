import React, { Component } from 'react';

/**
 * Application wrapper, passes props to children
 * @extends Component
 */
export default class Things extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="fluid">My name is New</div>
		);
	}
}
