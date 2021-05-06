import React from 'react';
import useEditType from './useEditType';
import { Button, Spinner } from "@blueprintjs/core";

const EditType = () => {
	const { onSubmit, type, error, name, code } = useEditType();

	if (Object.entries(type).length === 0 && type.constructor === Object) return <Spinner />;

	if (error) return <h2>Ha ocurrido un error</h2>;

	return (
		<div align="center" style={{marginTop: 5}}>
				<p className="h4 text-center py-4">Editar Tipo</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre del Tipo:
				</label>
				<input
					name="name"
					autoComplete="off"
					defaultValue={type.name}
					className="form-control"
					ref={name}
				/>

				<br />

				<label htmlFor="code" className="grey-text font-weight-light">
					Codigo del Tipo:
				</label>
				<input
					name="code"
					autoComplete="off"
					className="form-control"
					defaultValue={type.code}
					ref={code}
				/>

				<br />

				<div className="text-center py-4 mt-3">
					<Button onClick={onSubmit} className="btn btn-outline-blue" >
						Guardar
					</Button>
				</div>
		</div>
	);
};

export default EditType;
