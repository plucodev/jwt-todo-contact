import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

class Login extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md text-info text-center border border-info rounded bg-light">Login</div>
				</div>
				<div className="row mt-3">
					<div className="col-md text-info text-center border border-info rounded p-3">
						<form>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input
									type="email"
									className="form-control"
									name="email"
									id="exampleInputEmail"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
								<small id="emailHelp" className="form-text text-muted">
									Well never share your email with anyone else.
								</small>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputUsername">Username</label>
								<input
									type="text"
									name="username"
									className="form-control"
									id="exampleInputUsername"
									placeholder="Username"
								/>
							</div>

							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="row mt-3">
					<Link to="/">
						<button type="submit" className="btn btn-info">
							<i className="fas fa-home" />
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default Login;
