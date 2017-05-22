import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * Application wrapper, passes props to children
 * @extends Component
 */
export default class Main extends Component {
	static get propTypes() {
		return {
			children: PropTypes.node
		};
	}
	
	render() {
		return (
			<div className="fluid">
				<nav className="clearfix">
					<ul className="pull-right list-inline">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/admin">Admin</Link></li>
						<li><Link to="/admin/new">Add New</Link></li>
					</ul>
				</nav>

				<div>
					{ React.cloneElement(this.props.children, { ...this.props }) }
				</div>
			</div>
		);
	}
}
