import React from 'react';
import { Button, Spinner, Callout, Alert, Icon } from "@blueprintjs/core";
import useNewProduct from './useNewProduct';

const NewProduct = () => {
	const { name, packagingformat, cost, filterSubcategories, onSubmit, category, subcategory, categories, subcategories } = useNewProduct();

	const _categories = (categories !== null)?([].concat(categories).map((item,i) => ( <option value={item.id}>{item.name}</option> ) )):(<option></option>)
	const _subcategories = (subcategories !== null)?([].concat(subcategories).map((item,i) => ( <option value={item.id}>{item.name}</option> ) )):(<option></option>)

	return (
		<div align="center" style={{marginTop: 5}}>
				<p className="h4 text-center py-4">Nueva Producto</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre del Producto:
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
					Costo del Producto:
				</label>
				<input
					name="description"
					autoComplete="off"
					className="form-control"
					ref={cost}
				/>

				<label htmlFor="pack" className="grey-text font-weight-light">
					Envace del Producto:
				</label>
				<input
					name="pack"
					autoComplete="off"
					className="form-control"
					ref={packagingformat}
				/>

				<br />
				<label htmlFor="category" className="grey-text font-weight-light">
					Categoria:
				</label>
				<div>
					<select id="category" onChange={filterSubcategories} required className="browser-default custom-select" ref={category}>
						<option value="" title="none">Seleccione una opcion</option>
						{_categories}
					</select>
				</div>
				<br />
				<label htmlFor="category" className="grey-text font-weight-light">
					SubCategoria:
				</label>
				<div>
					<select id="category" required className="browser-default custom-select" ref={subcategory}>
						<option value="" title="none">Seleccione una opcion</option>
						{_subcategories}
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

export default NewProduct;
