import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

import {
    Alignment,
    Button,
    Navbar,
    Popover,
    Menu,
    MenuItem,
    Position,
} from "@blueprintjs/core";

export default class HeaderLinks extends Component {
	handlesignOut = () => {
		Auth.signOut().then((d) => {
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
		const username = this.props.childProps.state.username !== '' ? this.props.childProps.state.username : 'Ingresar';

		const userMenu = (
            <Menu>
                <MenuItem text={username} />
                <MenuItem icon="log-out" text="LogOut" onClick={ (e) => { e.preventDefault(); this.handlesignOut();}} />
            </Menu>
        );

		return (

			<Navbar>
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading>Litty Style</Navbar.Heading>
					<Navbar.Divider />
					{/* this.redirect('/') */}
					{this.props.childProps.state.user_roll.indexOf('admin') !== -1 && <Button className="bp3-minimal" onClick={(e) => {e.preventDefault(); this.redirect('/categories')}} text="Categorias"/>}
					{this.props.childProps.state.user_roll.indexOf('admin') !== -1 && <Button className="bp3-minimal" onClick={(e) => {e.preventDefault(); this.redirect('/subcategories')}} text="SubCategorias"/>}
					{this.props.childProps.state.user_roll.indexOf('admin') !== -1 && <Button className="bp3-minimal" onClick={(e) => {e.preventDefault(); this.redirect('/types')}} text="Tipos"/>}
					{this.props.childProps.state.user_roll.indexOf('admin') !== -1 && <Button className="bp3-minimal" onClick={(e) => {e.preventDefault(); this.redirect('/products')}} text="Productos"/>}
					{this.props.childProps.state.user_roll.indexOf('admin') !== -1 && <Button className="bp3-minimal" onClick={(e) => {e.preventDefault(); this.redirect('/services')}} text="Servicios"/>}
				</Navbar.Group>
				<Navbar.Group align={Alignment.RIGHT}>
					<Navbar.Divider />
					<Popover content={userMenu} position={Position.BOTTOM}>
						<Button icon="user" text=""/>
					</Popover>
				</Navbar.Group>
			</Navbar>
		);
	}
}