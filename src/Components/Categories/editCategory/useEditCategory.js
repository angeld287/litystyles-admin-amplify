import { useEffect, useState, useRef} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getCategory, listTypes } from '../../../graphql/queries';
import { updateCategory } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useEditCategory = () => {
	let history = useHistory();
	let { id } = useParams();
	const [ category, setCategory ] = useState({});
	const [ error, setError ] = useState(false);
	const [ list, setList ] = useState([]);

	const name = useRef(null);
	const code = useRef(null);
	const type = useRef(null);

	useEffect(
		() => {
			let didCancel = false;
			const _fetch = async () => {
				let _api = {};
				var api = null;

				try {
					_api = await API.graphql(graphqlOperation(getCategory, { id }));
					api = await API.graphql(graphqlOperation(listTypes));
				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setList(api.data.listTypes.items);
					setCategory(_api.data.getCategory);
				}

				return () => {
					didCancel = true;
				};
			};

			_fetch();
		},
		[ id ]
	);

	const onSubmit = async (input) => {
		try {

			if(name.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
				return;
			}

			if(code.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Codigo', 'error');
				return;
			}
			
			if(type.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo tipo', 'error');
				return;
			}

			var _name = list.filter(_ => _.id === type.current.value)[0].name;

			await API.graphql(graphqlOperation(updateCategory, { input: {id: id, name: name.current.value, typeCategoriesId: type.current.value, typeName: _name, code: code.current.value} }));
			await Swal.fire('Correcto', 'La categoria se ha actualizado correctamente', 'success');
			history.push('/categories');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, category, error, name, code, type, list };
};

export default useEditCategory;
