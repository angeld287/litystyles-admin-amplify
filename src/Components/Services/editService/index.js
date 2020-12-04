//import { Button } from 'aws-amplify-react';
import React from 'react';
import useEditService from './useEditService';
import { Button, Spinner } from "@blueprintjs/core";

const EditService = () => {
	const { onSubmit, filterSubcategories, subcategory, category, error, name, cost, categories, subcategories, service } = useEditService();

	if (Object.entries(service).length === 0 && service.constructor === Object) return <Spinner />;

	if (error) return <h2>Ha ocurrido un error</h2>;

	const _categories = (categories !== null)?([].concat(categories).map((item,i) => ( <option value={item.id}>{item.name}</option> ) )):(<option></option>)
	const _subcategories = (subcategories !== null)?([].concat(subcategories).map((item,i) => ( <option value={item.id}>{item.name}</option> ) )):(<option></option>)

	return (
		<div align="center" style={{marginTop: 5}}>
				<p className="h4 text-center py-4">Editar Servicio</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre del Servicio:
				</label>
				<input
					name="name"
					autoComplete="off"
					defaultValue={service.name}
					className="form-control"
					ref={name}
				/>

				<br />

				<label htmlFor="code" className="grey-text font-weight-light">
					Costo del Servicio:
				</label>
				<input
					name="code"
					autoComplete="off"
					className="form-control"
					defaultValue={service.cost}
					ref={cost}
				/>

<br />
				<label htmlFor="category" className="grey-text font-weight-light">
					Categoria:
				</label>
				<div>
					<select id="category" onChange={filterSubcategories} defaultValue={(service.category.items.length > 0 && service.category.items[0].category !== null) ? service.category.items[0].category.id : "0"} required className="browser-default custom-select" ref={category}>
						<option value="0">Seleccione una opcion</option>
						{_categories}
					</select>
				</div>
				<br />

				<br />
				<label htmlFor="subcategory" className="grey-text font-weight-light">
					SubCategoria:
				</label>
				<div>
					<select id="subcategory" defaultValue={service.subcategory.items.length > 0 && service.subcategory.items[0].subcategory !== null ? service.subcategory.items[0].subcategory.id : "0"} required className="browser-default custom-select" ref={subcategory}>
						<option value="0">Seleccione una opcion</option>
						{_subcategories}
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

export default EditService;
