import React, { useState, useContext, useMemo, useEffect } from "react";
import { Layout } from 'antd';
import CustomButton from "../../../components/CustomButton";
import CustomTable from '../../../components/CustomTable/CustomTable'
import CustomModal from "../../../components/CustomModal";
import { ProductContext, CategoriesContext } from "../../../providers";
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Swal from "sweetalert2";
import { setModuleStates } from "../../../utils/Items/Utils";

const Products = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const [id, setId] = useState('');
    const [cost, setCost] = useState('');
    const [name, setName] = useState('');
    const [packagingformat, setPackagingformat] = useState('');
    const [productItems, setProductItems] = useState([]);
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [subcategoryItems, setSubcategoryItems] = useState([]);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dlBtnLoading, setDlBtnLoading] = useState('');

    const { Content } = Layout;

    const handleClose = () => setShow(false);

    const { items, addItem, editItem, updateDeleteItem, getItemsNextToken, itemsLoading } = useContext(ProductContext);
    const categoryContext = useContext(CategoriesContext);

    const fields = [
        { subcategory, setSubcategory },
        { category, setCategory },
        { cost, setCost },
        { image, setImage },
        { packagingformat, setPackagingformat },
        { name, setName }
    ]

    const openItem = (e) => {
        try {
            //console.log(e, )
            //setCategory(e.category.items[0].category.id)
            setId(e.id);
            setModuleStates(fields, e)
            setEdit(true);
            setAdd(false)
            setShow(true);
        } catch (error) {
            throw new Error('Products - 01: ', error)
        }
    }

    const setProduct = async () => {
        let result = false;
        if (name === "") {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Nombre', 'error');
            return;
        }

        if (cost === "") {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Costo', 'error');
            return;
        }

        if (category === "") {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Categoria', 'error');
            return;
        }
        if (image === null) {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Imagen', 'error');
            return;
        }

        if (packagingformat === "") {
            Swal.fire('Campo Obligatorio', 'Favor completar el campo Formato de Envace', 'error');
            return;
        }

        setLoading(true);
        try {
            if (add) {
                result = await addItem({ cost: cost, name: name, category: category, subcategory: subcategory, image: image, packagingformat: packagingformat });
            } else if (edit) {
                result = await editItem({ id: id, cost: cost, name: name, category: category, subcategory: subcategory, image: image, packagingformat: packagingformat });
            }
        } catch (e) {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de Producto', 'El proceso de ' + (add ? 'creacion' : 'edicion') + ' ha fallado, intentelo mas tarde', 'error');
        }

        setEdit(false);
        setAdd(false);
        setLoading(false);
        setShow(false);

        if (result !== false) {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de Producto', 'El proceso ha finalizado correctamente', 'success');
        } else {
            Swal.fire((add ? 'Creacion' : 'Edicion') + ' de Producto', 'El proceso de ' + (add ? 'creacion' : 'edicion') + ' ha fallado, intentelo mas tarde', 'error');
        }
    }

    const alertDeleteItem = async (id) => {
        try {
            const result = await Swal.fire({ title: "Esta seguro que desea eliminar el producto?", icon: "warning", showCancelButton: true });
            if (result.isConfirmed && !result.isDenied) {
                await deleteItem(id);
            }
        } catch (error) {
            throw new Error('Products - 02: ', error)
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
            Swal.fire('Eliminacion de Producto', 'El proceso ha finalizado correctamente', 'success');
        } else {
            Swal.fire('Eliminacion de Producto', 'El proceso de eliminacion ha fallado, intentelo mas tarde', 'error');
        }
    }

    useMemo(() => {
        try {
            if (items !== undefined) {
                setProductItems(items.map(e => ({
                    nombre: e.name,
                    costo: e.cost,
                    acciones: [
                        { id: e.id, color: 'blue', icon: EditOutlined, onClicAction: () => { openItem(e) } },
                        { id: e.id, color: 'red', icon: DeleteOutlined, onClicAction: () => { alertDeleteItem(e.id) }, loading: dlBtnLoading === e.id }
                    ],
                    id: e.id
                })))
            }
        } catch (error) {
            throw new Error('Products - 03: ', error)
        }
    }, [items, dlBtnLoading]);

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
            throw new Error('Products - 04', error)
        }

    }, [category]);


    const inputs = [
        { label: "Nombre", type: "text", readOnly: (!edit && !add), onChange: e => setName(e.target.value), value: name },
        { label: "Costo", type: "number", readOnly: (!edit && !add), onChange: e => setCost(e.target.value), value: cost },
        { label: "Categoria", defaultValue: category, items: categoryContext.items.filter(_ => _.typeName === "Product"), type: "select", readOnly: (!edit && !add), onChange: _ => setCategory(_), getItemsNextToken: categoryContext.getItemsNextToken },
        { label: "Sub Categoria", defaultValue: subcategory, items: subcategoryItems, type: "select", readOnly: (!edit && !add), onChange: _ => setSubcategory(_) },
        { label: "Imagen", type: "file", readOnly: (!edit && !add), onChange: _ => { setImage(_.target.files[0]) } },
        { label: "Formato de Envace", type: "text", readOnly: (!edit && !add), onChange: e => setPackagingformat(e.target.value), value: packagingformat },
    ];

    return (
        <Content>
            <h3 className="ttl-1" >Productos</h3>
            <CustomButton className="btn-1" style="blue" intent="Primary" onClick={(e) => { e.preventDefault(); setAdd(true); setEdit(false); setShow(true); }} Icon={PlusCircleOutlined}></CustomButton>
            <CustomTable headers={['Nombre', 'Costo', 'Acciones']} items={productItems} itemsLoading={itemsLoading} getItemsNextToken={getItemsNextToken} />
            {/* Modal para editar y ver detalle de productos */}
            <CustomModal fields={fields} loading={loading} title={edit ? 'Editar Producto' : add ? 'Agregar Producto' : 'Ver Producto'} visible={show} onOk={setProduct} onCancel={handleClose} inputs={inputs} />
        </Content>
    )
}

export default Products;