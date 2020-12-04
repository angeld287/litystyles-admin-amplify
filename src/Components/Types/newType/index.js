import React from 'react';
import { Button} from "@blueprintjs/core";
import useNewType from './useNewType';

const NewType = () => {
	const { name, code, onSubmit } = useNewType();

	return (
		<div align="center" style={{marginTop: 5}}>
				<p className="h4 text-center py-4">Nuevo Tipo</p>

				<label htmlFor="name" className="grey-text font-weight-light">
					Nombre del Tipo:
				</label>
				<input
					name="name"
					autoComplete="off"
					className="form-control"
					//value=""
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
					ref={code}
				/>
				<br />

				<div className="text-center py-4 mt-3">
					<Button onClick={onSubmit}>
						Agregar
					</Button>
				</div>
		</div>
	);
};

export default NewType;
