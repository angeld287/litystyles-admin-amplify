import { useEffect, useState, useRef} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { getProduct, listCategorys } from '../../../graphql/customQueries';
import { updateProduct, updateProductCategory, updateProductSubCategory, createProductCategory, createProductSubCategory } from '../../../graphql/mutations';
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
	const image = useRef(null);

	useEffect(
		() => {
			let didCancel = false;
			const _fetch = async () => {
				let _api = {};
				var _categories = [];

				try {
					_categories = await API.graphql(graphqlOperation(listCategorys, {filter: { typeName: { eq: "Product"}}}));
					_api = await API.graphql(graphqlOperation(getProduct, { id }));
				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setCategories(_categories.data.listCategorys.items);
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
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Codigo', 'error');
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

			const _input = {id: product.id, packagingformat: packagingformat.current.value, name: name.current.value, cost: cost.current.value};

			if(image.current.value !== ""){
				const _image = await putImageOnStorage(name.current.value, image.current.files[0]);

				if (_image === null) {
					Swal.fire('Error', 'Hubo un error al cargar la imagen', 'error');
					return;
				}
				_input.image = _image.key
			}

			const p = await API.graphql(graphqlOperation(updateProduct, { input: _input }));
			if(product.category.items.length > 0){
				await API.graphql(graphqlOperation(updateProductCategory, { input: {id: product.category.items[0].id, productCategoryProductId: p.data.updateProduct.id, productCategoryCategoryId: category.current.value} }));
			}else{
				await API.graphql(graphqlOperation(createProductCategory, { input: { productCategoryProductId: p.data.updateProduct.id, productCategoryCategoryId: category.current.value} }));
			}

			if(subcategory.current.value !== "" ){
				if(product.subcategory.items > 0){
					await API.graphql(graphqlOperation(updateProductSubCategory, { input: {id: product.subcategory.items[0].id, productSubCategoryProductId: p.data.updateProduct.id, productSubCategorySubcategoryId: subcategory.current.value} }));
				}else{
					await API.graphql(graphqlOperation(createProductSubCategory, { input: { productSubCategoryProductId: p.data.updateProduct.id, productSubCategorySubcategoryId: subcategory.current.value} }));
				}
			}

			await Swal.fire('Correcto', 'La categoria se ha actualizado correctamente', 'success');
			history.push('/products');
		} catch (e) {
			console.log(e);
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};


	const putImageOnStorage = async (name, file) => {
        try {
            if(file !== []){

                if(file.type.includes("image/")){
                    const filename = "PRODUCTS_IMAGES/" + new Date().getTime() + "_" + name.replace(/ /g, '_') + ".jpeg";
                    const putr = await Storage.put(filename, file, { contentType: file.type });
                    return putr;
                }else{
					console.log('Solo se puede agregar un archivo tipo imagen.');
                    return null;
				}
				
            }else{
				console.log('No hay imagen seleccionada.');
                return null
            }
            
        } catch (e) {
            console.log(e);
			return null
        }
    }

	return { onSubmit, category, filterSubcategories, packagingformat, subcategory, categories, subcategories, error, name, cost, product, image };
};

export default useEditProduct;
