import React, { useState, useContext, useEffect, useMemo } from "react";
import { Layout } from 'antd';
import CustomButton from "../../../Components/CustomButton";
import CustomTable from '../../../Components/CustomTable/CustomTable'
import CustomModal from "../../../Components/CustomModal";
import { TypesContext } from "../../../providers";
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Swal from "sweetalert2";
import { setModuleStates } from "../../../utils/Items/Utils";

const Types = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [typeItems, setTypeItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dlBtnLoading, setDlBtnLoading] = useState('');

    const { Content } = Layout;

    const handleClose = () => setShow(false);

    const { items, addItem, editItem, updateDeleteItem, getItemsNextToken, itemsLoading } = useContext(TypesContext);

    const fields = useMemo(() => [
        { code, setCode },
        { name, setName }
    ], []);

    const openItem = (e) => {
        try {
            setId(e.id);
            setModuleStates(fields, e)
            setEdit(true);
            setAdd(false)
            setShow(true);
        } catch (error) {
            throw new Error('Type - 01: ', error)
        }
    }

    const setType = async () => {
        let result = false;
        if (name === "" || name === null) {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
            return;
        }

        if (code === "" || code === null) {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Codigo', 'error');
            return;
        }

        setLoading(true);
        try {
            if (add) {
                result = await addItem({ name: name, code: code });
            } else if (edit) {
                result = await editItem({ id: id, name: name, code: code });
            }
        } catch (e) {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de Tipo', 'El proceso de ' + (add ? 'creacion' : 'edicion') + ' ha fallado, intentelo mas tarde', 'error');
        }

        setEdit(false);
        setAdd(false);
        setLoading(false);
        setShow(false);

        if (result !== false) {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de Tipo', 'El proceso ha finalizado correctamente', 'success');
        } else {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de Tipo', 'El proceso de ' + (add ? 'creacion' : 'edicion') + ' ha fallado, intentelo mas tarde', 'error');
        }
    }

    const alertDeleteItem = async (id) => {
        try {
            const result = await Swal.fire({ title: "Esta seguro que desea eliminar el Tipo?", icon: "warning", showCancelButton: true });
            if (result.isConfirmed && !result.isDenied) {
                await deleteItem(id);
            }
        } catch (error) {
            throw new Error('Type - 02: ', error)
        }
    }

    const deleteItem = async (id) => {
        let result = false;
        setDlBtnLoading(id);

        try {
            await updateDeleteItem(id);
            result = true;
        } catch (error) {
            result = false;
        }

        setDlBtnLoading('');

        if (result === true) {
            Swal.fire('Eliminacion de Tipo', 'El proceso ha finalizado correctamente', 'success');
        } else {
            Swal.fire('Eliminacion de Tipo', 'El proceso de eliminacion ha fallado, intentelo mas tarde', 'error');
        }
    }

    //update the item list when a crud event occurs
    useEffect(() => {
        try {
            if (items !== undefined) {
                setTypeItems(items.map(e => ({
                    nombre: e.name,
                    codigo: e.code,
                    acciones: [
                        { id: e.id, color: 'blue', icon: EditOutlined, onClicAction: () => { openItem(e) }, text: "Editar" },
                        { id: e.id, color: 'red', icon: DeleteOutlined, onClicAction: () => { alertDeleteItem(e.id) }, loading: dlBtnLoading === e.id, text: "Remover" }
                    ],
                    id: e.id
                })))
            }
        } catch (error) {
            throw new Error('Type - 03: ', error)
        }
    }, [items, dlBtnLoading]);

    const inputs = useMemo(() => [
        { label: "Nombre", type: "text", readOnly: (!edit && !add), onChange: e => setName(e.target.value), value: name },
        { label: "Codigo", type: "text", readOnly: (!edit && !add), onChange: e => setCode(e.target.value), value: code },
    ], [show, add, edit, name, code]);

    const _headers = useMemo(() => ['Nombre', 'Codigo', 'Acciones'], []);
    const _TypeItems = useMemo(() => typeItems, [typeItems]);

    return (
        <Content>
            <CustomButton id="typeAddBtn" className="btn-1" style="blue" intent="Primary" onClick={(e) => { e.preventDefault(); setAdd(true); setEdit(false); setShow(true); }} Icon={PlusCircleOutlined}>Agregar Tipo</CustomButton>
            <CustomTable headers={_headers} items={_TypeItems} itemsLoading={itemsLoading} getItemsNextToken={getItemsNextToken} />
            {/* Modal para editar y ver detalle de Tipo */}
            <CustomModal fields={fields} loading={loading} title={edit ? 'Editar Tipo' : add ? 'Agregar Tipo' : 'Ver Tipo'} visible={show} onOk={setType} onCancel={handleClose} inputs={inputs} />
        </Content>
    )
}

export default Types;