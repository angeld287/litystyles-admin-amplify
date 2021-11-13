import React from 'react';
import currentUserContext from '../../context/currentUser/currentUser.Context';
import { LogOut } from '../Authentication/AuthComponent';
import {
	Alignment,
	Navbar,
	Button
} from "@blueprintjs/core";
import { redirect } from '../../context/communContex/commun.util';
import { PAGE_OPTIONS } from '../../context/communContex/commun.data';

const HeaderLinks = () => {
	const user = React.useContext(currentUserContext);

	return (
		<Navbar>
			<Navbar.Group align={Alignment.LEFT}>
				<Navbar.Heading onClick={(e) => { e.preventDefault(); redirect("/") }}>Litty Style</Navbar.Heading>
				<Navbar.Divider />
				{PAGE_OPTIONS.map(_ => <Button key={_.id} className="bp3-minimal" onClick={(e) => { e.preventDefault(); redirect(_.link) }} text={_.title} />)}
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
						}} text="LogOut" />
					</div>
					:
					<Button className="bp3-minimal" onClick={(e) => {
						e.preventDefault();
						redirect('/signin');
					}} text="Login" />
				}
			</Navbar.Group>
		</Navbar>
	);
}

export default HeaderLinks;
