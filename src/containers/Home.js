import React, { Component } from 'react';
import { Link } from 'react-router';
import request from 'superagent';

const PLACEHOLDERS = ['Peanut Butter', 'Chocolate', 'Brown Sugar', 'Apple'];

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
		this.interval = null;
		this.state = {
			value: '',
			placeholder: 'Peanut Butter'
		};
	}

	componentDidMount() {
		this.interval = window.setInterval(this.genRandomPlaceholder, 5000);
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	genRandomPlaceholder = () => {
		const randomIndex = Math.floor(Math.random() * PLACEHOLDERS.length);
		this.setState({ placeholder: PLACEHOLDERS[randomIndex] });
	}

	onChange = e => {
		this.setState({ value: e.target.value });
	}

	search = () => {
		request
			.get('http://localhost:3000/api/things')
			.query({ name: this.state.value })
			.end((err, res) => {
				console.log(res);
			});
	}

	render() {
		return (
			<div className="fluid">
				<label>What do you have?</label><br />
				<input
					type="text"
					placeholder={`i.e. ${this.state.placeholder}`}
					onChange={this.onChange}
				/>
				<button onClick={this.search}>Search</button>
			</div>
		);
	}
}
