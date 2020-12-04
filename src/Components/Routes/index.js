import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './../Home';
import AuthComponent from './../Authentication/AuthComponent';
import Categories from '../Categories';
import NewCategory from '../Categories/newCategory';
import EditCategory from '../Categories/editCategory';

import SubCategories from '../SubCategories';
import NewSubCategory from '../SubCategories/newSubCategory';
import EditSubCategory from '../SubCategories/editSubCategory';

import Types from '../Types';
import NewType from '../Types/newType';
import EditType from '../Types/editType';

export const Routes = ({ childProps }) => (
	<Switch>
		<Route exact path="/" render={() => <Home />} />
		<ProtectedRouteAdmin exact path="/events/new" render={NewCategory} props={childProps} />
		<ProtectedRouteAdmin exact path="/events/:id/edit" render={EditCategory} props={childProps} />
		<ProtectedRouteAdmin exact path="/events" render={Categories} props={childProps} />
		<ProtectedRouteAdmin exact path="/contacts/new" render={NewCategory} props={childProps} />
		<ProtectedRouteAdmin exact path="/contacts/:id/edit" render={EditCategory} props={childProps} />
		<ProtectedRouteAdmin exact path="/contacts" render={Categories} props={childProps} />
		<ProtectedRouteAdmin exact path="/categories/new" render={NewCategory} props={childProps} />
		<ProtectedRouteAdmin exact path="/categories/:id/edit" render={EditCategory} props={childProps} />
		<ProtectedRouteAdmin exact path="/categories" render={Categories} props={childProps} />
		<ProtectedRouteAdmin exact path="/subcategories/new" render={NewSubCategory} props={childProps} />
		<ProtectedRouteAdmin exact path="/subcategories/:id/edit" render={EditSubCategory} props={childProps} />
		<ProtectedRouteAdmin exact path="/subcategories" render={SubCategories} props={childProps} />
		<ProtectedRouteAdmin exact path="/types/new" render={NewType} props={childProps} />
		<ProtectedRouteAdmin exact path="/types/:id/edit" render={EditType} props={childProps} />
		<ProtectedRouteAdmin exact path="/types" render={Types} props={childProps} />
		<ProppedRoute exact path="/signin" render={AuthComponent} props={childProps} />
	</Switch>
);


export const ProtectedRouteAdmin = ({ render: C, props: childProps, ...rest }) => (
	<Route
		{...rest}
		render={(rProps) =>
			childProps.isLoggedIn ? childProps.state.user_roll.indexOf('admin') !== -1 ? (
				<C {...rProps} {...childProps} />
			) : (
				<Redirect to="/" />
			) : (
				<Redirect to={`/signin?redirect=${rProps.location.pathname}${rProps.location.search}`} />
			)}
	/>
);


export const ProppedRoute = ({ render: C, props: childProps, ...rest }) => (
	<Route {...rest} render={(rProps) => <C {...rProps} {...childProps} />} />
);
