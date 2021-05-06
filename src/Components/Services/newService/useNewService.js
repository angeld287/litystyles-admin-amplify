import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createService, createServiceCategory, createServiceSubCategory } from '../../../graphql/mutations';
import { listCategorys } from '../../../graphql/customQueries';
import Swal from 'sweetalert2';

const useNewService = () => {
	const [ categories, setCategories ] = useState([]);
	const [ subcategories, setSubCategories ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	const name = useRef(null);
	const cost = useRef(null);
	const category = useRef(null);
	const subcategory = useRef(null);

	useEffect(() => { 
		let didCancel = false;

		const fetch = async () => {
			var _categories = [];

			try {
				_categories = await API.graphql(graphqlOperation(listCategorys, {filter: { typeName: { eq: "Office"}}}));
			} catch (error) {
				setLoading(false);
				setError(true);
			}

			if (!didCancel) {
				setCategories(_categories.data.listCategorys.items);
				setLoading(false);
			}
		};

		fetch();

		return () => {
			didCancel = true;
		};
	}, []);

	const filterSubcategories = () => {
		setSubCategories(categories.filter(_ => _.id === category.current.value)[0].subcategories.items)
	}

	let history = useHistory();

	const onSubmit = async (input) => {
		try {
			
			if(name.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
				return;
			}

			if(cost.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo costo', 'error');
				return;
			}
			
			if(category.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo categoria', 'error');
				return;
			}

			const s = await API.graphql(graphqlOperation(createService, { input: {name: name.current.value, cost: cost.current.value, categoryId: category.current.value} }));
			await API.graphql(graphqlOperation(createServiceCategory, { input: {serviceCategoryCategoryId: category.current.value, serviceCategoryServiceId: s.data.createService.id} }));
			if(subcategory.current.value !== "" ){await API.graphql(graphqlOperation(createServiceSubCategory, { input: {serviceSubCategorySubcategoryId: subcategory.current.value, serviceSubCategoryServiceId: s.data.createService.id} }));}

			await Swal.fire('Correcto', 'El servicio se ha creado correctamente', 'success');
			history.push('/services');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { name, cost, category, filterSubcategories, subcategory, onSubmit, categories, subcategories, loading, error };
};

export default useNewService;
