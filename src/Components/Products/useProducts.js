import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import Swal from 'sweetalert2';
import { deleteProduct } from '../../graphql/mutations';

const useProducts = () => {
	const [ list, setList ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(() => {
		let didCancel = false;

		const fetch = async () => {
			var api = [];

			try {
				api = await API.graphql(graphqlOperation(listProducts));
			} catch (error) {
				setLoading(false);
				setError(true);
			}

			if (!didCancel) {
				setList(api.data.listProducts.items);
				setLoading(false);
			}
		};

		fetch();

		return () => {
			didCancel = true;
		};
	}, []);

	const _handleDelete = async (id) => {
		const result = await Swal.fire({
			title: '¿Desea eliminar la categoria?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Eliminar',
			cancelButtonText: 'Cancelar'
		});

		var input = {
			id
		};

		if (result.value) {
			try {
				await API.graphql(graphqlOperation(deleteProduct, { input }));
				Swal.fire('Eliminado correctamente!', '', 'success');
				setList(list.filter((e) => e.id !== id));
			} catch (error) {
				Swal.fire('Error', 'Intentelo nuevamente', 'error');
			}
		}
	};

	return { list, error, loading, _handleDelete };
};

export default useProducts;
