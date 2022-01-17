import React, { useState, useContext, useEffect, useMemo } from "react";
import { Layout } from 'antd';
import CustomButton from "../../../Components/CustomButton";
import CustomTable from '../../../Components/CustomTable/CustomTable'
import CustomModal from "../../../Components/CustomModal";
import { ServiceContext, CategoriesContext } from "../../../providers";
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Swal from "sweetalert2";
import { setModuleStates } from "../../../utils/Items/Utils";

const Services = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const [id, setId] = useState('');
    const [cost, setCost] = useState('');
    const [name, setName] = useState('');
    const [serviceItems, setServiceItems] = useState([]);
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [subcategoryItems, setSubcategoryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dlBtnLoading, setDlBtnLoading] = useState('');

    const { Content } = Layout;

    const handleClose = () => setShow(false);

    const { items, addItem, editItem, updateDeleteItem, getItemsNextToken, itemsLoading } = useContext(ServiceContext);
    const categoryContext = useContext(CategoriesContext);

    const fields = useMemo(() => [
        { subcategory, setSubcategory },
        { category, setCategory },
        { cost, setCost },
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
            throw new Error('Services - 01: ', error)
        }
    }

    const setService = async () => {
        let result = false;
        if (name === "" || name === null) {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
            return;
        }

        if (cost === "" || cost === null) {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Costo', 'error');
            return;
        }

        if (category === "" || category === null) {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Categoria', 'error');
            return;
        }

        setLoading(true);
        try {
            if (add) {
                result = await addItem({ cost: cost, name: name, category: category, subcategory: subcategory });
            } else if (edit) {
                result = await editItem({ id: id, cost: cost, name: name, category: category, subcategory: subcategory });
            }
        } catch (e) {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de Servicio', 'El proceso de ' + (add ? 'creacion' : 'edicion') + ' ha fallado, intentelo mas tarde', 'error');
        }

        setEdit(false);
        setAdd(false);
        setLoading(false);
        setShow(false);

        if (result !== false) {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de Servicio', 'El proceso ha finalizado correctamente', 'success');
        } else {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de Servicio', 'El proceso de ' + (add ? 'creacion' : 'edicion') + ' ha fallado, intentelo mas tarde', 'error');
        }
    }

    const alertDeleteItem = async (id) => {
        try {
            const result = await Swal.fire({ title: "Esta seguro que desea eliminar el Servicio?", icon: "warning", showCancelButton: true });
            if (result.isConfirmed && !result.isDenied) {
                await deleteItem(id);
            }
        } catch (error) {
            throw new Error('Services - 02: ', error)
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
            Swal.fire('Eliminacion de Servicio', 'El proceso ha finalizado correctamente', 'success');
        } else {
            Swal.fire('Eliminacion de Servicio', 'El proceso de eliminacion ha fallado, intentelo mas tarde', 'error');
        }
    }

    //update the item list when a crud event occurs
    useEffect(() => {
        try {
            if (items !== undefined) {
                setServiceItems(items.map(e => ({
                    nombre: e.name,
                    costo: e.cost,
                    acciones: [
                        { id: e.id, color: 'blue', icon: EditOutlined, onClicAction: () => { openItem(e) }, text: "Editar" },
                        { id: e.id, color: 'red', icon: DeleteOutlined, onClicAction: () => { alertDeleteItem(e.id) }, loading: dlBtnLoading === e.id, text: "Remover" }
                    ],
                    id: e.id
                })))
            }
        } catch (error) {
            throw new Error('Services - 03: ', error)
        }
    }, [items, dlBtnLoading]);

    //set the subcategory list when the category is selected
    useEffect(() => {
        try {
            if (category !== '' && category !== null && category !== undefined) {
                const cat = typeof category === "string" ? category : category.items[0].category.id;
                const categoryObj = categoryContext.items.find(_ => _.id === cat);
                setSubcategoryItems(categoryObj.subcategories.items)
            } else {
                setSubcategoryItems([])
            }
        } catch (error) {
            throw new Error('Services - 04', error)
        }

    }, [category]);

    const inputs = useMemo(() => [
        { label: "Nombre", type: "text", readOnly: (!edit && !add), onChange: e => setName(e.target.value), value: name },
        { label: "Costo", type: "number", readOnly: (!edit && !add), onChange: e => setCost(e.target.value), value: cost },
        { label: "Categoria", defaultValue: category, items: categoryContext.items.filter(_ => _.typeName === "Service"), type: "select", readOnly: (!edit && !add), onChange: _ => setCategory(_), getItemsNextToken: categoryContext.getItemsNextToken },
        { label: "Sub Categoria", defaultValue: subcategory, items: subcategoryItems, type: "select", readOnly: (!edit && !add), onChange: _ => setSubcategory(_) },
    ], [show, add, edit, name, cost, category, subcategory]);

    const _headers = useMemo(() => ['Nombre', 'Costo', 'Acciones'], []);
    const _serviceItems = useMemo(() => serviceItems, [serviceItems]);

    return (
        <Content>
            <CustomButton id="serviceAddBtn" className="btn-1" style="blue" intent="Primary" onClick={(e) => { e.preventDefault(); setAdd(true); setEdit(false); setShow(true); }} Icon={PlusCircleOutlined}>Agregar Servicio</CustomButton>
            <CustomTable headers={_headers} items={_serviceItems} itemsLoading={itemsLoading} getItemsNextToken={getItemsNextToken} />
            {/* Modal para editar y ver detalle de servicios */}
            <CustomModal fields={fields} loading={loading} title={edit ? 'Editar Servicio' : add ? 'Agregar Servicio' : 'Ver Servicio'} visible={show} onOk={setService} onCancel={handleClose} inputs={inputs} />
        </Content>
    )
}

export default Services;