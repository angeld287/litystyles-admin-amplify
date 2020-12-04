import React from 'react';
import useProducts from './useProducts';
import { useHistory } from 'react-router-dom';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { Button, Spinner } from "@blueprintjs/core";

import './index.css';

const Products = (props) => {
	const { loading, error, list, _handleDelete } = useProducts();
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
					<td >{item.name}</td>
					<td>{item.cost}</td>
					<td><Button style={{marginRight: 1}} intent="primary" icon="edit" onClick={e => { e.preventDefault(); history.push('/products/'+item.id+'/edit')}}></Button><Button style={{marginRight: 1}} intent="Danger" icon="delete" onClick={e => { e.preventDefault(); _handleDelete(item.id)}}></Button></td>
				</tr>
			)
		)):(<td></td>)

	return (
		<Container fluid>
			<h3 className="mt-5">Productos</h3>
			<Row>
				<Col sm={2}><Button loading={false} intent="Primary" onClick={(e) => {e.preventDefault(); redirect('products/new');}} icon="add"></Button></Col>
			</Row>
			<div style={{marginTop:20}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>No.</th>
							<th>Nombre</th>
							<th>Costo</th>
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

export default Products;
