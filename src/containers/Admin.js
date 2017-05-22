import React, { Component } from 'react';
import { browserHistory } from 'react-router';

/**
 * Application wrapper, passes props to children
 * @extends Component
 */
export default class Admin extends Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="fluid">My name is Admin</div>
		);
	}
}
