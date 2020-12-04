import React from 'react';
import useSubCategories from './useSubCategories';
import { useHistory } from 'react-router-dom';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { Button, Spinner } from "@blueprintjs/core";

import './index.css';

const SubCategories = (props) => {
	const { loading, error, list, _handleDelete } = useSubCategories();
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
					<td>{item.categoryName}</td>
					<td><Button style={{marginRight: 1}} intent="primary" icon="edit" onClick={e => { e.preventDefault(); history.push('/subcategories/'+item.id+'/edit')}}></Button><Button style={{marginRight: 1}} intent="Danger" icon="delete" onClick={e => { e.preventDefault(); _handleDelete(item.id)}}></Button></td>
				</tr>
			)
		)):(<td></td>)

	return (
		<Container fluid>
			<h3 className="mt-5">Subcategorias</h3>
			<Row>
				<Col sm={2}><Button loading={false} intent="Primary" onClick={(e) => {e.preventDefault(); redirect('subcategories/new');}} icon="add"></Button></Col>
			</Row>
			<div style={{marginTop:20}}>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>No.</th>
							<th>Nombre</th>
							<th>Codigo</th>
							<th>Categoria</th>
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

export default SubCategories;
