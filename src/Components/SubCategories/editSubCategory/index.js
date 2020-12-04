//import { Button } from 'aws-amplify-react';
import React from 'react';
import useEditSubCategory from './useEditSubCategory';
import { Button, Spinner } from "@blueprintjs/core";

const EditCategory = () => {
	const { list, onSubmit, subcategory, error, name, code, category } = useEditSubCategory();

	if (Object.entries(subcategory).length === 0 && subcategory.constructor === Object) return <Spinner />;

	if (error) return <h2>Ha ocurrido un error</h2>;

	const _list = (list !== null)?([].concat(list)
		.map((item,i) =>
			(
				<option value={item.id}>{item.name}</option>
			)
		)):(<option></option>)

	return (
		<div align="center" style={{marginTop: 5}}>
				<p className="h4 text-center py-4">Editar SubCategoria</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre de la SubCategoria:
				</label>
				<input
					name="name"
					autoComplete="off"
					defaultValue={subcategory.name}
					className="form-control"
					ref={name}
				/>

				<br />

				<label htmlFor="code" className="grey-text font-weight-light">
					Codigo de la SubCategoria:
				</label>
				<input
					name="code"
					autoComplete="off"
					className="form-control"
					defaultValue={subcategory.code}
					ref={code}
				/>

				<br />
				<label htmlFor="category" className="grey-text font-weight-light">
					Categoria:
				</label>
				<div>
					<select id="category" defaultValue={list.filter(_ => _.name === subcategory.categoryName)[0] === undefined ? "0" : list.filter(_ => _.name === subcategory.categoryName)[0].id} required className="browser-default custom-select" ref={category}>
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
