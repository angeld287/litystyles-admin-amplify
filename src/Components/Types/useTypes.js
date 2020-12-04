import React, { useState, useEffect, Fragment } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listTypes } from '../../graphql/queries';
import Swal from 'sweetalert2';
import { deleteType } from '../../graphql/mutations';

const useTypes = () => {
	const [ list, setList ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);

	useEffect(() => {
		let didCancel = false;

		const fetch = async () => {
			var api = [];

			try {
				api = await API.graphql(graphqlOperation(listTypes));
			} catch (error) {
				setLoading(false);
				setError(true);
			}

			if (!didCancel) {
				setList(api.data.listTypes.items);
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
			title: '¿Desea eliminar el tipo?',
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
				await API.graphql(graphqlOperation(deleteType, { input }));
				Swal.fire('Eliminado correctamente!', '', 'success');
				setList(list.filter((e) => e.id !== id));
			} catch (error) {
				Swal.fire('Error', 'Intentelo nuevamente', 'error');
			}
		}
	};

	return { list, error, loading, _handleDelete };
};

export default useTypes;
