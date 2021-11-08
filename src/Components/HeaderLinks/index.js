import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

import {
    Alignment,
    Navbar,
} from "@blueprintjs/core";

export default class HeaderLinks extends Component {
	handlesignOut = () => {
		Auth.signOut().then(() => {
			window.location.reload();
			//this.props.childProps.onUserLogOut();
		});
	};

	redirectSignIn = () => {
		window.location.href = '/signin';
	};

	redirect = (path) => {
        window.location.href = path;
	};

	render() {

		return (
			<Navbar>
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading>Litty Style</Navbar.Heading>
					<Navbar.Divider />
				</Navbar.Group>
				<Navbar.Group align={Alignment.RIGHT}>
					<Navbar.Divider />
				</Navbar.Group>
			</Navbar>
		);
	}
}
