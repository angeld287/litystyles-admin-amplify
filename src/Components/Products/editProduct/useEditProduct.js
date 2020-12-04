import { useEffect, useState, useRef} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { listCategorys, listSubCategorys } from '../../../graphql/queries';
import { getProduct } from '../../../graphql/customQueries';
import { updateProduct, updateProductCategory, updateProductSubCategory } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useEditProduct = () => {
	let history = useHistory();
	let { id } = useParams();
	const [ categories, setCategories ] = useState([]);
	const [ subcategories, setSubCategories ] = useState([]);
	const [ product, setProduct ] = useState({});
	const [ error, setError ] = useState(false);

	const name = useRef(null);
	const cost = useRef(null);
	const packagingformat = useRef(null);
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
					_api = await API.graphql(graphqlOperation(getProduct, { id }));
				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setCategories(_categories.data.listCategorys.items);
					setSubCategories(_subcategories.data.listSubCategorys.items);
					setProduct(_api.data.getProduct);
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
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Codigo', 'error');
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

			const p = await API.graphql(graphqlOperation(updateProduct, { input: {id: product.id, packagingformat: packagingformat.current.value, name: name.current.value, cost: cost.current.value} }));
			await API.graphql(graphqlOperation(updateProductCategory, { input: {id: product.category.items[0].id, productCategoryProductId: p.data.updateProduct.id, productCategoryCategoryId: category.current.value} }));
			await API.graphql(graphqlOperation(updateProductSubCategory, { input: {id: product.subcategory.items[0].id, productSubCategoryProductId: p.data.updateProduct.id, productSubCategorySubcategoryId: subcategory.current.value} }));

			await Swal.fire('Correcto', 'La categoria se ha actualizado correctamente', 'success');
			history.push('/categories');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, category, subcategory, categories, subcategories, error, name, cost, product };
};

export default useEditProduct;
