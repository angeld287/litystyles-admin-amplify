import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createProduct, createProductCategory, createProductSubCategory } from '../../../graphql/mutations';
import { listCategorys } from '../../../graphql/customQueries';
import Swal from 'sweetalert2';

const useNewProduct = () => {
	const [ categories, setCategories ] = useState([]);
	const [ subcategories, setSubCategories ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	const name = useRef(null);
	const cost = useRef(null);
	const packagingformat = useRef(null);
	const category = useRef(null);
	const subcategory = useRef(null);

	useEffect(() => { 
		let didCancel = false;

		const fetch = async () => {
			var _categories = [];

			try {
				_categories = await API.graphql(graphqlOperation(listCategorys, {filter: { typeName: { eq: "Product"}}}));
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
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Costo', 'error');
				return;
			}
			
			if(packagingformat.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Formato de Envace', 'error');
				return;
			}

			if(category.current.value === ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Categoria', 'error');
				return;
			}


			const p = await API.graphql(graphqlOperation(createProduct, { input: {packagingformat: packagingformat.current.value, name: name.current.value, cost: cost.current.value} }));
			await API.graphql(graphqlOperation(createProductCategory, { input: {productCategoryProductId: p.data.createProduct.id, productCategoryCategoryId: category.current.value} }));

			if(subcategory.current.value !== "" ){await API.graphql(graphqlOperation(createProductSubCategory, { input: {productSubCategoryProductId: p.data.createProduct.id, productSubCategorySubcategoryId: subcategory.current.value} }));}

			await Swal.fire('Correcto', 'La categoria se ha creado correctamente', 'success');
			history.push('/products');
		} catch (e) {
			console.log(e);
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { name, cost, filterSubcategories, onSubmit, categories, subcategories, category, subcategory, loading, error, packagingformat };
};

export default useNewProduct;
