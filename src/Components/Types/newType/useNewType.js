import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createType } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useNewType = () => {

	const name = useRef(null);
	const code = useRef(null);

	let history = useHistory();

	const onSubmit = async () => {
		try {
			
			if(name.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
				return;
			}

			if(code.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Codigo', 'error');
				return;
			}

			await API.graphql(graphqlOperation(createType, { input: {name: name.current.value, code: code.current.value} }));
			await Swal.fire('Correcto', 'El tipo se ha creado correctamente', 'success');
			history.push('/types');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { name, code, onSubmit };
};

export default useNewType;
