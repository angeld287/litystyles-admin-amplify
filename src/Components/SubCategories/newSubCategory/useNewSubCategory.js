import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createSubCategory } from '../../../graphql/mutations';
import { listCategorys } from '../../../graphql/queries';
import Swal from 'sweetalert2';

const useNewSubCategory = () => {
	//const [ type, setType ] = useState("");
	const [ list, setList ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	const name = useRef(null);
	const code = useRef(null);
	const category = useRef(null);

	useEffect(() => { 
		let didCancel = false;

		const fetch = async () => {
			var api = [];

			try {
				api = await API.graphql(graphqlOperation(listCategorys));
			} catch (error) {
				setLoading(false);
				setError(true);
			}

			if (!didCancel) {
				setList(api.data.listCategorys.items);
				setLoading(false);
			}
		};

		fetch();

		return () => {
			didCancel = true;
		};
	}, []);

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
			
			if(category.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo categoria', 'error');
				return;
			}

			var _name = list.filter(_ => _.id === category.current.value)[0].name;

			await API.graphql(graphqlOperation(createSubCategory, { input: {name: name.current.value, categorySubcategoriesId: category.current.value, categoryName: _name, code: code.current.value} }));
			await Swal.fire('Correcto', 'La subcategoria se ha creado correctamente', 'success');
			history.push('/subcategories');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { name, code, onSubmit, category, list };
};

export default useNewSubCategory;
