import React from 'react';
import currentUserContext from '../../context/currentUser/currentUser.Context';
import { LogOut } from '../Authentication/AuthComponent';
import {
    Alignment,
    Navbar,
	Button
} from "@blueprintjs/core";

const HeaderLinks = () => {
	const user = React.useContext(currentUserContext);
	console.log(user)

	const redirect = (path) => {
		window.location.href = path;
	};
	
	return (
		<Navbar>
			<Navbar.Group align={Alignment.LEFT}>
				<Navbar.Heading>Litty Style</Navbar.Heading>
				<Navbar.Divider />
			</Navbar.Group>
			<Navbar.Group align={Alignment.RIGHT}>
				<Navbar.Divider />
				{user.user !== null 
				? 
					<div>
						<span>{user.user.idToken.payload.email}</span>
						<Button className="bp3-minimal" onClick={e => {
							e.preventDefault();
							LogOut();
							user.onUserLogOut();
						}} text="LogOut"/>
					</div>
				:
					<Button className="bp3-minimal" onClick={(e) => {
						e.preventDefault();
						redirect('/signin');
					}} text="Login"/>
				}
			</Navbar.Group>
		</Navbar>
	);
}

export default HeaderLinks;
