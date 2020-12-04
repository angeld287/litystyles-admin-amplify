import { useEffect, useState, useRef} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getSubCategory, listCategorys } from '../../../graphql/queries';
import { updateSubCategory } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useEditSubCategory = () => {
	let history = useHistory();
	let { id } = useParams();
	const [ subcategory, setSubCategory ] = useState({});
	const [ error, setError ] = useState(false);
	const [ list, setList ] = useState([]);

	const name = useRef(null);
	const code = useRef(null);
	const category = useRef(null);

	useEffect(
		() => {
			let didCancel = false;
			const _fetch = async () => {
				let _api = {};
				var api = null;

				try {
					_api = await API.graphql(graphqlOperation(getSubCategory, { id }));
					api = await API.graphql(graphqlOperation(listCategorys));
				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setList(api.data.listCategorys.items);
					setSubCategory(_api.data.getSubCategory);
				}

				return () => {
					didCancel = true;
				};
			};

			_fetch();
		},
		[ id ]
	);

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
				Swal.fire('Campo Obligatorio', 'Favor completar el campo tipo', 'error');
				return;
			}

			var _name = list.filter(_ => _.id === category.current.value)[0].name;

			await API.graphql(graphqlOperation(updateSubCategory, { input: {id: id, name: name.current.value, categorySubcategoriesId: category.current.value, categoryName: _name, code: code.current.value} }));
			await Swal.fire('Correcto', 'La subcategoria se ha actualizado correctamente', 'success');
			history.push('/subcategories');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, category, error, name, code, list, subcategory };
};

export default useEditSubCategory;
