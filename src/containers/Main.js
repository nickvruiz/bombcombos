import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

/**
 * Application wrapper, passes props to children
 * @extends Component
 */
export default class Main extends Component {
	static get propTypes() {
		return {};
	}

	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="full-fluid">My name is Jonas</div>
		);
	}
}
