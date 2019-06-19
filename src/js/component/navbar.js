import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="container">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">Todo & Contact List</span>
					</Link>
					<div className="ml-auto">
						<Link to="/login">
							<button className="btn btn-info">Login</button>
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}
