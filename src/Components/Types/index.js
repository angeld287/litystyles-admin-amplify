import React, { Fragment } from 'react';
import useTypes from './useTypes';
import { useHistory } from 'react-router-dom';
import { Table, Container, Row, Col, ButtonGroup, Modal, Form } from 'react-bootstrap';
import { Button, Spinner, Icon } from "@blueprintjs/core";

import './index.css';

const Types = (props) => {
	const { loading, error, list, _handleDelete } = useTypes();
	let history = useHistory();

	if(loading) return(<Spinner/>)

	if (error) return <h2>Ha ocurrido un error</h2>;

	const redirect = (path) => {
        window.location.href = path;
	};

	const _list = (list !== null)?([].concat(list)
		.map((item,i) =>
			(
				<tr key={i}>
					<td>{i+1}</td>
					<td>{item.name}</td>
					<td>{item.code}</td>
					<td><Button style={{marginRight: 1}} intent="primary" icon="edit" onClick={e => { e.preventDefault(); history.push('/types/'+item.id+'/edit')}}></Button><Button style={{marginRight: 1}} intent="Danger" icon="delete" onClick={e => { e.preventDefault(); _handleDelete(item.id)}}></Button></td>
				</tr>
			)
		)):(<td></td>)

	return (
		<Container fluid>
			<h3 className="mt-5">Tipos</h3>
			<Row>
				<Col sm={2}><Button loading={false} intent="Primary" onClick={(e) => {e.preventDefault(); redirect('types/new');}} icon="add"></Button></Col>
			</Row>
			<div style={{marginTop:20}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>No.</th>
							<th>Nombre</th>
							<th>Codigo</th>
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

export default Types;
