import React from 'react';

import {
	BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

import Home from '../pages/Home'
import Business from '../pages/Business'
import Classifications from '../pages/Classifications'
import HeaderLinks from '../Components/HeaderLinks';
import PropsTypes from 'prop-types';
import CustomSpinner from '../Components/CustomSpinner';

const AppRoutes = ({ user }) => {

	if (user === undefined) return (<CustomSpinner />)

	return (
		<Router>
			<HeaderLinks />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/business" element={<Business />} />
				<Route exact path="/clasifications" element={<Classifications />} />
			</Routes>
		</Router>)
};

AppRoutes.propTypes = {
	user: PropsTypes.object
}

export default AppRoutes;