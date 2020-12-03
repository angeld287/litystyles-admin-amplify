import { useEffect, useState } from 'react';
import { useFormContext } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createCategory } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useNewCategory = () => {
	const { register, handleSubmit, errors, formState } = useFormContext();
	const [ _module, setModule ] = useState("");
	let history = useHistory();

	const onSubmit = async (input) => {
		try {
			
			if(input.name == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
				return;
			}

			if(input.description == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Descripcion', 'error');
				return;
			}
			
			if(_module == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Modulo', 'error');
				return;
			}

			await API.graphql(graphqlOperation(createCategory, { input: {name: input.name, description: input.description, module: _module} }));
			await Swal.fire('Correcto', 'La categoria se ha creado correctamente', 'success');
			history.push('/categories');
		} catch (error) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { onSubmit, register, handleSubmit, errors, formState, setModule };
};

export default useNewCategory;
