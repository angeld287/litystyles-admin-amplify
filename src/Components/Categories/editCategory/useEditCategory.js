import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getCategory } from '../../../graphql/queries';
import { updateCategory } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useEditCategory = () => {
	let history = useHistory();
	let { id } = useParams();
	const [ category, setCategory ] = useState({});
	const [ error, setError ] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	const [ _module, setModule ] = useState("");

	useEffect(
		() => {
			let didCancel = false;
			const fetchCategory = async () => {
				let categoryApi = {};

				try {
					categoryApi = await API.graphql(graphqlOperation(getCategory, { id }));
				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setCategory(categoryApi.data.getCategory);
					setModule(categoryApi.data.getCategory.module);
				}

				return () => {
					didCancel = true;
				};
			};

			fetchCategory();
		},
		[ id ]
	);

	const onSubmit = async (input) => {
		input.id = id;
		try {
			await API.graphql(graphqlOperation(updateCategory, { input: {id: id, name: input.name, description: input.description, module: _module} }));
			await Swal.fire('Correcto', 'La categoria se ha actualizado correctamente', 'success');
			history.push('/categories');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, category, register, handleSubmit, errors, error, _module, setModule };
};

export default useEditCategory;
