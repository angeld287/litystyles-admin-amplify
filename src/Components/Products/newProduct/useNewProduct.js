import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createProduct, createProductCategory, createProductSubCategory } from '../../../graphql/mutations';
import { listCategorys, listSubCategorys } from '../../../graphql/queries';
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
			var _subcategories = [];

			try {
				_categories = await API.graphql(graphqlOperation(listCategorys));
				_subcategories = await API.graphql(graphqlOperation(listSubCategorys));
			} catch (error) {
				setLoading(false);
				setError(true);
			}

			if (!didCancel) {
				setCategories(_categories.data.listCategorys.items);
				setSubCategories(_subcategories.data.listSubCategorys.items);
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

			if(cost.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Costo', 'error');
				return;
			}
			
			if(packagingformat.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Formato de Envace', 'error');
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

			const p = await API.graphql(graphqlOperation(createProduct, { input: {packagingformat: packagingformat.current.value, name: name.current.value, cost: cost.current.value} }));
			await API.graphql(graphqlOperation(createProductCategory, { input: {productCategoryProductId: p.data.updateProduct.id, productCategoryCategoryId: category.current.value} }));
			await API.graphql(graphqlOperation(createProductSubCategory, { input: {productSubCategoryProductId: p.data.updateProduct.id, productSubCategorySubcategoryId: subcategory.current.value} }));

			await Swal.fire('Correcto', 'La categoria se ha creado correctamente', 'success');
			history.push('/categories');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo de nuevo mas tarde', 'error');
		}
	};

	return { name, cost, onSubmit, categories, subcategories, category, subcategory, loading };
};

export default useNewProduct;
