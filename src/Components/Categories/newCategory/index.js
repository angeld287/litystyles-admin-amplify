import React from 'react';
import { Button, Spinner, Callout, Alert, Icon } from "@blueprintjs/core";
import { Tabs, Tab, Table } from 'react-bootstrap';
import useNewCategory from './useNewCategory';

const NewCategory = () => {
	const { name, code, onSubmit, type, list } = useNewCategory();

	const _list = (list !== null)?([].concat(list)
		//.sort((a, b) => a.name.localeCompare(b.name))
		.map((item,i) =>
			(
				<option value={item.id}>{item.name}</option>
			)
		)):(<option></option>)

	return (
		<div align="center" style={{marginTop: 5}}>
				<p className="h4 text-center py-4">Nueva Categoria</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre de la Categoria:
				</label>
				<input
					name="name"
					autoComplete="off"
					className="form-control"
					//value=""
					ref={name}
				/>

				<br />

				<label htmlFor="description" className="grey-text font-weight-light">
					Codigo de la Categoria:
				</label>
				<input
					name="description"
					autoComplete="off"
					className="form-control"
					ref={code}
				/>

				<br />
				<label htmlFor="name" className="grey-text font-weight-light">
					Tipo:
				</label>
				<div>
					<select id="type" required className="browser-default custom-select" ref={type}>
						<option value="" title="none">Seleccione una opcion</option>
						{_list}
					</select>
				</div>
				<br />

				<div className="text-center py-4 mt-3">
					<Button onClick={onSubmit}>
						Agregar
					</Button>
				</div>
		</div>
	);
};

export default NewCategory;
