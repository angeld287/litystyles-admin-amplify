import React, { useState, useContext, useMemo } from "react";
import { Layout } from 'antd';
import CustomButton from "../../../components/CustomButton";
import CustomTable from '../../../components/CustomTable/CustomTable'
import CustomModal from "../../../components/CustomModal";
import { ProductContext, CategoriesContext, SubCategoriesContext } from "../../../providers";
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Swal from "sweetalert2";
import { setModuleStates } from "../../../utils/Items/Utils";

const Products = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const [cost, setCost] = useState('');
    const [name, setName] = useState('');
    const [packagingformat, setPackagingformat] = useState('');
    const [productItems, setProductItems] = useState([]);
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const { Content } = Layout;

    const handleClose = () => setShow(false);

    const { items, addItem, getItemsNextToken, itemsLoading } = useContext(ProductContext);
    const categoryContext = useContext(CategoriesContext);
    const subCategoryContext = useContext(SubCategoriesContext);

    const fields = [
        { subCategory, setSubCategory },
        { category, setCategory },
        { cost, setCost },
        { image, setImage },
        { packagingformat, setPackagingformat },
        { name, setName }
    ]

    const openItem = (e) => {
        //console.log(e)
        setModuleStates(fields, e)
        setEdit(true);
        setAdd(false)
        setShow(true);
    }

    const setProduct = async () => {
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
                await addItem({ cost: cost, name: name, category: category, subCategory: subCategory, image: image, packagingformat: packagingformat });
            } else if (edit) {
                console.log(edit)
            }
        } catch (e) {
            Swal.fire('Error en Creacion', 'El proceso de creacion ha fallado, intentelo mas tarde', 'error');
        }

        setEdit(false);
        setAdd(false);
        setLoading(false);
        setShow(false);
    }

    useMemo(() => {
        setProductItems(items.map(e => ({
            nombre: e.name,
            costo: e.cost,
            acciones: [
                { id: e.id, color: 'blue', icon: EditOutlined, onClicAction: () => { openItem(e) } },
                { id: e.id, color: 'red', icon: DeleteOutlined, onClicAction: () => { console.log(e.id) } }
            ],
            id: e.id
        })))
    }, [items]);

    const inputs = [
        { label: "Nombre", type: "text", readOnly: (!edit && !add), onChange: e => setName(e.target.value), value: name },
        { label: "Costo", type: "number", readOnly: (!edit && !add), onChange: e => setCost(e.target.value), value: cost },
        { label: "Categoria", defaultValue: category, items: categoryContext.items, type: "select", readOnly: (!edit && !add), onChange: _ => setCategory(_), getItemsNextToken: categoryContext.getItemsNextToken },
        { label: "Sub Categoria", defaultValue: subCategory, items: subCategoryContext.items, type: "select", readOnly: (!edit && !add), onChange: _ => setSubCategory(_), getItemsNextToken: subCategoryContext.getItemsNextToken },
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