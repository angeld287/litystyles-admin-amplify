import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createCategory } from '../../../graphql/mutations';
import { listTypes } from '../../../graphql/queries';
import Swal from 'sweetalert2';

const useNewCategory = () => {
	//const [ type, setType ] = useState("");
	const [ list, setList ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	const name = useRef(null);
	const code = useRef(null);
	const type = useRef(null);

	useEffect(() => { 
		let didCancel = false;

		const fetch = async () => {
			var api = [];

			try {
				api = await API.graphql(graphqlOperation(listTypes));
			} catch (error) {
				setLoading(false);
				setError(true);
			}

			if (!didCancel) {
				setList(api.data.listTypes.items);
				setLoading(false);
			}
		};

		fetch();

		return () => {
			didCancel = true;
		};
	}, []);

	let history = useHistory();

	const onSubmit = async (input) => {
		try {
			
			if(name.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
				return;
			}

			if(code.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Codigo', 'error');
				return;
			}
			
			if(type.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo tipo', 'error');
				return;
			}

			var _name = list.filter(_ => _.id === type.current.value)[0].name;

			await API.graphql(graphqlOperation(createCategory, { input: {name: name.current.value, typeCategoriesId: type.current.value, typeName: _name, code: code.current.value} }));
			await Swal.fire('Correcto', 'La categoria se ha creado correctamente', 'success');
			history.push('/categories');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { name, code, onSubmit, type, list };
};

export default useNewCategory;
