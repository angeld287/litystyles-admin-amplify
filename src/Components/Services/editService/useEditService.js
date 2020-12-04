import { useEffect, useState, useRef} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getService, listCategorys } from '../../../graphql/customQueries';
import { updateService, updateServiceCategory, updateServiceSubCategory, createServiceCategory, createServiceSubCategory } from '../../../graphql/mutations';
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

				try {
					_categories = await API.graphql(graphqlOperation(listCategorys, {filter: { typeName: { eq: "Service"}}}));
					_api = await API.graphql(graphqlOperation(getService, { id }));
				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setCategories(_categories.data.listCategorys.items);
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

	const filterSubcategories = () => {
		setSubCategories(categories.filter(_ => _.id === category.current.value)[0].subcategories.items)
	}

	const onSubmit = async () => {
		try {

			if(name.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
				return;
			}

			if(cost.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Costo', 'error');
				return;
			}
			
			if(category.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Categoria', 'error');
				return;
			}

			const s = await API.graphql(graphqlOperation(updateService, { input: {id: service.id, name: name.current.value, cost: cost.current.value} }));

			if(service.category.items.length > 0){
				await API.graphql(graphqlOperation(updateServiceCategory, { input: {id: service.category.items[0].id, serviceCategoryCategoryId: subcategory.current.value, serviceCategoryServiceId: s.data.updateService.id} }));
			}else{
				await API.graphql(graphqlOperation(createServiceCategory, { input: { serviceCategoryCategoryId: subcategory.current.value, serviceCategoryServiceId: s.data.updateService.id } }));
			}

			if(subcategory.current.value !== "" ){
				if(service.subcategory.items > 0){
					await API.graphql(graphqlOperation(updateServiceSubCategory, { input: {id: service.subcategory.items[0].id, serviceSubCategorySubcategoryId: subcategory.current.value, serviceSubCategoryServiceId: s.data.updateService.id} }));
				}else{
					await API.graphql(graphqlOperation(createServiceSubCategory, { input: { serviceSubCategorySubcategoryId: subcategory.current.value, serviceSubCategoryServiceId: s.data.updateService.id} }));
				}
			}

			await Swal.fire('Correcto', 'El servicio se ha actualizado correctamente', 'success');
			history.push('/services');
		} catch (e) {
			console.log(e);
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, filterSubcategories, category, subcategory, categories, subcategories, error, name, cost, service };
};

export default useEditService;
