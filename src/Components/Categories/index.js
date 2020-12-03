import React, { Fragment } from 'react';
import useCategories from './useCategories';
import { Link } from 'react-router-dom';
import { Table, Container, Row, Col, ButtonGroup, Modal, Form } from 'react-bootstrap';
import { Button, Spinner, Icon } from "@blueprintjs/core";

import './index.css';

const Categories = (props) => {
	const { loading, error, list, _handleDelete } = useCategories();

	if(loading) return(<Spinner/>)

	if (error) return <h2>Ha ocurrido un error</h2>;

	const redirect = (path) => {
        window.location.href = path;
	};

	return (
		<Container fluid>
			<h3 className="mt-5">categorias</h3>
			<Row>
				<Col sm={2}><Button loading={false} intent="Primary" onClick={(e) => {e.preventDefault(); redirect('categories/new');}} icon="add"></Button></Col>
			</Row>
			<div style={{marginTop:20}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							{/* <th>No.</th> */}
							<th>Servicio</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</Table>
			</div>
		</Container>
	);
};

export default Categories;
