import React from 'react';
import currentUserContext from '../../context/currentUser/currentUser.Context';
import { LogOut } from '../Authentication/AuthComponent';
import { Menu } from 'antd';

import { redirect } from '../../context/communContex/commun.util';
import { PAGE_OPTIONS } from '../../context/communContex/commun.data';

const HeaderLinks = () => {
	const user = React.useContext(currentUserContext);

	return (
		<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
			{PAGE_OPTIONS.map(_ => <Menu.Item key={_.id} onClick={(e) => { e.preventDefault(); redirect(_.link) }}>{_.title}</Menu.Item>)}


			{user.user !== null && user.user.signInUserSession !== null
				?
				<Menu.Item key="logoutbtn" style={{ float: 'right' }} onClick={e => {
					e.preventDefault();
					LogOut();
					user.onUserLogOut();
				}}>
					{user.user.signInUserSession.idToken.payload.email} - Logout
				</Menu.Item>
				:
				<Menu.Item key="loginbtn" style={{ float: 'right' }} onClick={e => {
					e.preventDefault();
					redirect('/signin');
				}}>
					Login
				</Menu.Item>
			}
		</Menu>
	);
}

export default HeaderLinks;
