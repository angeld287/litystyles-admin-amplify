import React from 'react';
import currentUserContext from '../../context/currentUser/currentUser.Context';
// import { Auth } from 'aws-amplify';

import {
    Alignment,
    Navbar,
	Button
} from "@blueprintjs/core";

const HeaderLinks = () => {
	const data = React.useContext(currentUserContext);
	// const handlesignOut = () => {
	// 	Auth.signOut().then(() => {
	// 		window.location.reload();
	// 		this.props.childProps.onUserLogOut();
	// 	});
	// };

	//console.log(data)

	return (
		<Navbar>
			<Navbar.Group align={Alignment.LEFT}>
				<Navbar.Heading>Litty Style</Navbar.Heading>
				<Navbar.Divider />
			</Navbar.Group>
			<Navbar.Group align={Alignment.RIGHT}>
				<Navbar.Divider />
				{data.logged 
				? 
					<Button className="bp3-minimal" onClick={data.toggleLogged} text="Login"/>
				:
					<Button className="bp3-minimal" onClick={data.toggleLogged} text="LogOut"/>
				}
			</Navbar.Group>
		</Navbar>
	);
}

export default HeaderLinks;
