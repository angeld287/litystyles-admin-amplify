import { useEffect, useState, useRef} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getType } from '../../../graphql/queries';
import { updateType } from '../../../graphql/mutations';
import Swal from 'sweetalert2';

const useEditType = () => {
	let history = useHistory();
	let { id } = useParams();
	const [ type, setType ] = useState({});
	const [ error, setError ] = useState(false);

	const name = useRef(null);
	const code = useRef(null);

	useEffect(
		() => {
			let didCancel = false;
			const _fetch = async () => {
				let api = {};

				try {
					api = await API.graphql(graphqlOperation(getType, { id }));
				} catch (e) {
					setError(true);
				}

				if (!didCancel) {
					setType(api.data.getType);
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

			if(code.current.value == ""){
				Swal.fire('Campo Obligatorio', 'Favor completar el campo Codigo', 'error');
				return;
			}

			await API.graphql(graphqlOperation(updateType, { input: {id: id, name: name.current.value, code: code.current.value} }));
			await Swal.fire('Correcto', 'El tipo se ha actualizado correctamente', 'success');
			history.push('/types');
		} catch (e) {
			Swal.fire('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
		}
	};

	return { onSubmit, type, error, name, code };
};

export default useEditType;
