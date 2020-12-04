import { useEffect, useState, useRef} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listCategorys, listSubCategorys } from '../../../graphql/queries';
import { getService } from '../../../graphql/customQueries';
import { updateService, updateServiceCategory, updateServiceSubCategory } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useEditService = () => {
	let history = useHistory();
	let { id } = useParams();
	const [ categories, setCategories ] = useState([]);
	const [ subcategories, setSubCategories ] = useState([]);
	const [ service, setService ] = useState({});
	const [ error, setError ] = useState(false);

	const name = useRef(null);
	const cost = useRef(null);
	const category = useRef(null);
	const subcategory = useRef(null);

	useEffect(
		() => {
			let didCancel = false;
			const _fetch = async () => {
				let _api = {};
				var _categories = [];
				var _subcategories = [];

				try {
					_categories = await API.graphql(graphqlOperation(listCategorys));
					_subcategories = await API.graphql(graphqlOperation(listSubCategorys));
					_api = await API.graphql(graphqlOperation(getService, { id }));
				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setCategories(_categories.data.listCategorys.items);
					setSubCategories(_subcategories.data.listSubCategorys.items);
					setService(_api.data.getService);
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

			if(cost.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Costo', 'error');
				return;
			}
			
			if(category.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Categoria', 'error');
				return;
			}

			if(subcategory.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Subcategoria', 'error');
				return;
			}

			const s = await API.graphql(graphqlOperation(updateService, { input: {id: service.id, name: name.current.value, cost: cost.current.value} }));
			await API.graphql(graphqlOperation(updateServiceCategory, { input: {id: service.category.items[0].id, serviceCategoryCategoryId: category.current.value, serviceCategoryServiceId: s.data.updateService.id} }));
			await API.graphql(graphqlOperation(updateServiceSubCategory, { input: {id: service.subcategory.items[0].id, serviceSubCategorySubcategoryId: subcategory.current.value, serviceSubCategoryServiceId: s.data.updateService.id} }));

			await Swal.fire('Correcto', 'El servicio se ha actualizado correctamente', 'success');
			history.push('/categories');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, category, subcategory, categories, subcategories, error, name, cost, service };
};

export default useEditService;
