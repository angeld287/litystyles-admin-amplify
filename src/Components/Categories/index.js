import React, { Fragment } from 'react';
import useCategories from './useCategories';
import { useHistory } from 'react-router-dom';
import { Table, Container, Row, Col, ButtonGroup, Modal, Form } from 'react-bootstrap';
import { Button, Spinner, Icon } from "@blueprintjs/core";

import './index.css';

const Categories = (props) => {
	const { loading, error, list, _handleDelete } = useCategories();
	let history = useHistory();

	if(loading) return(<Spinner/>)

	if (error) return <h2>Ha ocurrido un error</h2>;

	const redirect = (path) => {
        window.location.href = path;
	};

	const _list = (list !== null)?([].concat(list)
		//.sort((a, b) => a.name.localeCompare(b.name))
		.map((item,i) =>
			(
				<tr key={i}>
					<td>{i+1}</td>
					<td style={{width: 200}}>{item.name}</td>
					<td>{item.typeName}</td>
					<td><Button style={{marginRight: 1}} intent="primary" icon="edit" onClick={e => { e.preventDefault(); history.push('/categories/'+item.id+'/edit')}}></Button><Button style={{marginRight: 1}} intent="Danger" icon="delete" onClick={e => { e.preventDefault(); _handleDelete(item.id)}}></Button></td>
				</tr>
			)
		)):(<td></td>)

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
							<th>No.</th>
							<th>Nombre</th>
							<th>Tipo</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{_list}
					</tbody>
				</Table>
			</div>
		</Container>
	);
};

export default Categories;
