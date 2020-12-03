//import { Button } from 'aws-amplify-react';
import React from 'react';
import { Table, Container, Row, Col, ButtonGroup, Modal, Form } from 'react-bootstrap';
import useEditCategory from './useEditCategory';
import { Button, Spinner, Icon } from "@blueprintjs/core";

const EditCategory = () => {
	const { onSubmit, category, register, handleSubmit, errors, error, setModule, _module } = useEditCategory();

	if (Object.entries(category).length === 0 && category.constructor === Object) return <Spinner />;

	if (error) return <h2>Ha ocurrido un error</h2>;

	return (
		<div align="center" style={{marginTop: 5}}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p className="h4 text-center py-4">Editar Categoria</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre de la Categoria:
				</label>
				<input
					name="name"
					autoComplete="off"
					defaultValue={category.name}
					className="form-control"
					ref={register({ required: { message: 'Este campo es requerido', value: true } })}
				/>
				{errors.name && <span className="text-danger mb-2">{errors.name.message}</span>}

				<br />

				<label htmlFor="description" className="grey-text font-weight-light">
					Descripcion de la Categoria:
				</label>
				<input
					name="description"
					autoComplete="off"
					className="form-control"
					defaultValue={category.description}
					ref={register({ required: { message: 'Este campo es requerido', value: true } })}
				/>
				{errors.description && <span className="text-danger mb-2">{errors.description.message}</span>}

				<br />
				<label htmlFor="name" className="grey-text font-weight-light">
					Modulo:
				</label>
				<div>
					<select id="module" value={_module} required className="browser-default custom-select" onChange={ c => setModule(c.target.value)}>
						<option value="0">Seleccione una opcion</option>
						<option value="location">Ubicacion</option>
						<option value="event">Evento</option>
					</select>
				</div>
				<br />

				<div className="text-center py-4 mt-3">
					<Button className="btn btn-outline-blue" type="submit">
						Guardar
					</Button>
				</div>
			</form>
		</div>
	);
};

export default EditCategory;
