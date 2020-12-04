//import { Button } from 'aws-amplify-react';
import React from 'react';
import useEditProduct from './useEditProduct';
import { Button, Spinner } from "@blueprintjs/core";

const EditProduct = () => {
	const { onSubmit, packagingformat, subcategory, category, categories, filterSubcategories, subcategories, error, name, cost, product } = useEditProduct();

	if (Object.entries(product).length === 0 && product.constructor === Object) return <Spinner />;

	if (error) return <h2>Ha ocurrido un error</h2>;

	const _categories = (categories !== null)?([].concat(categories).map((item,i) => ( <option value={item.id}>{item.name}</option> ) )):(<option></option>)
	const _subcategories = (subcategories !== null)?([].concat(subcategories).map((item,i) => ( <option value={item.id}>{item.name}</option> ) )):(<option></option>)

	return (
		<div align="center" style={{marginTop: 5}}>
				<p className="h4 text-center py-4">Editar Producto</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre del Producto:
				</label>
				<input
					name="name"
					autoComplete="off"
					defaultValue={product.name}
					className="form-control"
					ref={name}
				/>

				<br />

				<label htmlFor="cost" className="grey-text font-weight-light">
					Costo del Producto:
				</label>
				<input
					name="cost"
					autoComplete="off"
					className="form-control"
					defaultValue={product.cost}
					ref={cost}
				/>

				<label htmlFor="pack" className="grey-text font-weight-light">
					Envace del Producto:
				</label>
				<input
					name="pack"
					autoComplete="off"
					className="form-control"
					defaultValue={product.packagingformat}
					ref={packagingformat}
				/>

				<br />
				<label htmlFor="category" className="grey-text font-weight-light">
					Categoria:
				</label>
				<div>
					<select id="category" onChange={filterSubcategories} defaultValue={(product.category.items.length > 0 && product.category.items[0].category !== null) ? product.category.items[0].category.id : "0"} required className="browser-default custom-select" ref={category}>
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
					<select id="subcategory" defaultValue={(product.subcategory.items.length > 0 && product.subcategory.items[0].subcategory !== null) ? product.subcategory.items[0].subcategory.id : "0"} required className="browser-default custom-select" ref={subcategory}>
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

export default EditProduct;
