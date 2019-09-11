import React from "react";

class NavComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="NavComponent">
				<nav className="navbar navbar-light bg-light">
					<a className="navbar-brand" href="/#">
						DBS Eatery
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navDrop">
						<span className="navbar-toggler-icon"></span>
					</button>
				</nav>
			</div>
		);
	}
}

export default NavComponent;
