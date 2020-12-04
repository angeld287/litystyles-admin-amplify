//import { Button } from 'aws-amplify-react';
import React from 'react';
import useEditCategory from './useEditCategory';
import { Button, Spinner } from "@blueprintjs/core";

const EditCategory = () => {
	const { list, onSubmit, category, error, name, code, type } = useEditCategory();

	if (Object.entries(category).length === 0 && category.constructor === Object) return <Spinner />;

	if (error) return <h2>Ha ocurrido un error</h2>;

	const _list = (list !== null)?([].concat(list)
		.map((item,i) =>
			(
				<option value={item.id}>{item.name}</option>
			)
		)):(<option></option>)

	return (
		<div align="center" style={{marginTop: 5}}>
				<p className="h4 text-center py-4">Editar Categoria</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre de la Categoria:
				</label>
				<input
					name="name"
					autoComplete="off"
					defaultValue={category.name}
					className="form-control"
					ref={name}
				/>

				<br />

				<label htmlFor="code" className="grey-text font-weight-light">
					Codigo de la Categoria:
				</label>
				<input
					name="code"
					autoComplete="off"
					className="form-control"
					defaultValue={category.code}
					ref={code}
				/>

				<br />
				<label htmlFor="type" className="grey-text font-weight-light">
					Tipo:
				</label>
				<div>
					<select id="type" defaultValue={list.filter(_ => _.name === category.typeName)[0] === undefined ? "0" : list.filter(_ => _.name === category.typeName)[0].id} required className="browser-default custom-select" ref={type}>
						<option value="0">Seleccione una opcion</option>
						{_list}
					</select>
				</div>
				<br />

				<div className="text-center py-4 mt-3">
					<Button onClick={onSubmit} className="btn btn-outline-blue">
						Guardar
					</Button>
				</div>
		</div>
	);
};

export default EditCategory;
