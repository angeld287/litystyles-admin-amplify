import React from 'react';

import {
	BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import Home from '../pages/Home'
import Business from '../pages/Business'
import HeaderLinks from '../components/HeaderLinks';
import PropsTypes from 'prop-types';
import CustomSpinner from '../components/CustomSpinner';

const AppRoutes = ({ user }) => {

	if (user === undefined) return (<CustomSpinner />)

	return (
		<Router>
			<HeaderLinks />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/business" element={<Business />} />
			</Routes>
		</Router>)
};

AppRoutes.propTypes = {
	user: PropsTypes.object
}

export default AppRoutes;