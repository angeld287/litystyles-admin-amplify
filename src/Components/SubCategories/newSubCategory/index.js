import React from 'react';
import { Button } from "@blueprintjs/core";
import useNewSubCategory from './useNewSubCategory';

const NewSubCategory = () => {
	const { name, code, onSubmit, category, list } = useNewSubCategory();

	const _list = (list !== null)?([].concat(list)
		.map((item,i) =>
			(
				<option value={item.id}>{item.name}</option>
			)
		)):(<option></option>)

	return (
		<div align="center" style={{marginTop: 5}}>
				<p className="h4 text-center py-4">Nueva SubCategoria</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre de la SubCategoria:
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
					Codigo de la SubCategoria:
				</label>
				<input
					name="description"
					autoComplete="off"
					className="form-control"
					ref={code}
				/>

				<br />
				<label htmlFor="category" className="grey-text font-weight-light">
					Categoria:
				</label>
				<div>
					<select id="category" required className="browser-default custom-select" ref={category}>
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

export default NewSubCategory;
