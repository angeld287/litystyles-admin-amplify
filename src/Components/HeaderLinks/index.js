import React from 'react';
import currentUserContext from '../../context/currentUser/currentUser.Context';
import { LogOut } from '../Authentication/AuthComponent';
import { Menu } from 'antd';

import { redirect } from '../../context/communContex/commun.util';
import { PAGE_OPTIONS } from '../../context/communContex/commun.data';

const HeaderLinks = () => {
	const user = React.useContext(currentUserContext);

	const handleClick = (e) => {
		redirect(e.item.props.link);
	}

	const logOut = () => {
		LogOut();
		user.onUserLogOut();
	}

	const logIn = () => {
		redirect('/signin');
	}

	const rightStyle = { position: 'absolute', top: 0, right: 0 }

	const _user = user.user !== null ? user.user : JSON.parse(sessionStorage.getItem('CURRENT_USER_SESSION'))

	return (
		<>
			<Menu selectedKeys={[1]} mode="horizontal">
				{PAGE_OPTIONS.map(_ => <Menu.Item onClick={handleClick} link={_.link} key={_.id} >{_.title}</Menu.Item>)}
			</Menu>
			<Menu mode="horizontal" style={rightStyle}>
				{_user !== null && _user.signInUserSession !== null
					?
					<Menu.Item key="logoutbtn" onClick={logOut}>
						{_user.signInUserSession.idToken.payload.email} - Logout
					</Menu.Item>
					:
					<Menu.Item key="loginbtn" onClick={logIn}>
						Login
					</Menu.Item>
				}
			</Menu>
		</>
	);
}

export default HeaderLinks;
