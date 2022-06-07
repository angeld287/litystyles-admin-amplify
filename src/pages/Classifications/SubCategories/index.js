import React, { useState, useContext, useEffect, useMemo } from "react";
import { Layout } from 'antd';
import CustomButton from "../../../Components/CustomButton";
import CustomTable from '../../../Components/CustomTable/CustomTable'
import CustomModal from "../../../Components/CustomModal";
import { SubCategoriesContext, CategoriesContext } from "../../../providers";
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Swal from "sweetalert2";
import { setModuleStates } from "../../../utils/Items/Utils";

const SubCategories = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [category, setCategory] = useState('');
    const [subCategoryItems, setSubCategoryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dlBtnLoading, setDlBtnLoading] = useState('');

    const { Content } = Layout;

    const handleClose = () => setShow(false);

    const { items, addItem, editItem, updateDeleteItem, getItemsNextToken, itemsLoading } = useContext(SubCategoriesContext);
    const categoryContext = useContext(CategoriesContext);

    const fields = useMemo(() => [
        { category, setCategory },
        { code, setCode },
        { name, setName }
    ], []);

    const openItem = (e) => {
        try {
            const _category = categoryContext.items.find(_ => _.name === e.categoryName)
            e.category = _category.id;

            setId(e.id);
            setModuleStates(fields, e)
            setEdit(true);
            setAdd(false)
            setShow(true);
        } catch (error) {
            throw new Error('SubCategory - 01: ', error)
        }
    }

    const setSubCategory = async () => {
        let result = false;
        if (name === "" || name === null) {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
            return;
        }

        if (code === "" || code === null) {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Codigo', 'error');
            return;
        }

        if (category === "" || category === null) {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Categoria', 'error');
            return;
        }

        setLoading(true);
        try {
            const _category = categoryContext.items.find(_ => _.id === category);

            if (add) {
                result = await addItem({ name: name, code: code, category: category, categoryName: _category.name });
            } else if (edit) {
                result = await editItem({ id: id, name: name, code: code, category: category, categoryName: _category.name });
            }
        } catch (e) {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de SubCategoria', 'El proceso de ' + (add ? 'creacion' : 'edicion') + ' ha fallado, intentelo mas tarde', 'error');
        }

        setEdit(false);
        setAdd(false);
        setLoading(false);
        setShow(false);

        if (result !== false) {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de SubCategoria', 'El proceso ha finalizado correctamente', 'success');
        } else {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de SubCategoria', 'El proceso de ' + (add ? 'creacion' : 'edicion') + ' ha fallado, intentelo mas tarde', 'error');
        }
    }

    const alertDeleteItem = async (id) => {
        try {
            const result = await Swal.fire({ title: "Esta seguro que desea eliminar el SubCategoria?", icon: "warning", showCancelButton: true });
            if (result.isConfirmed && !result.isDenied) {
                await deleteItem(id);
            }
        } catch (error) {
            throw new Error('SubCategory - 02: ', error)
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
            Swal.fire('Eliminacion de SubCategoria', 'El proceso ha finalizado correctamente', 'success');
        } else {
            Swal.fire('Eliminacion de SubCategoria', 'El proceso de eliminacion ha fallado, intentelo mas tarde', 'error');
        }
    }

    //update the item list when a crud event occurs
    useEffect(() => {
        try {
            if (items !== undefined) {
                setSubCategoryItems(items.map(e => ({
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
            throw new Error('SubCategory - 03: ', error)
        }
    }, [items, dlBtnLoading]);

    const inputs = useMemo(() => [
        { label: "Nombre", type: "text", readOnly: (!edit && !add), onChange: e => setName(e.target.value), value: name },
        { label: "Codigo", type: "text", readOnly: (!edit && !add), onChange: e => setCode(e.target.value), value: code },
        { label: "Categoria", defaultValue: category, items: categoryContext.items, type: "select", readOnly: (!edit && !add), onChange: _ => setCategory(_), getItemsNextToken: categoryContext.getItemsNextToken },
    ], [show, add, edit, name, code, category]);

    const _headers = useMemo(() => ['Nombre', 'Codigo', 'Acciones'], []);
    const _subCategoryItems = useMemo(() => subCategoryItems, [subCategoryItems]);

    return (
        <Content>
            <CustomButton id="categoryAddBtn" className="btn-1" style="blue" intent="Primary" onClick={(e) => { e.preventDefault(); setAdd(true); setEdit(false); setShow(true); }} Icon={PlusCircleOutlined}>Agregar SubCategoria</CustomButton>
            <CustomTable headers={_headers} items={_subCategoryItems} itemsLoading={itemsLoading} getItemsNextToken={getItemsNextToken} />
            {/* Modal para editar y ver detalle de SubCategoria */}
            <CustomModal fields={fields} loading={loading} title={edit ? 'Editar SubCategoria' : add ? 'Agregar SubCategoria' : 'Ver SubCategoria'} visible={show} onOk={setSubCategory} onCancel={handleClose} inputs={inputs} />
        </Content>
    )
}

export default SubCategories;