import React, { useState, useContext, useMemo } from "react";
import { Layout } from 'antd';
import CustomButton from "../../../components/CustomButton";
import CustomTable from '../../../components/CustomTable/CustomTable'
import CustomModal from "../../../components/CustomModal";
import { ProductContext, CategoriesContext, SubCategoriesContext } from "../../../providers";
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { transformAndUploadImages } from '../../../services/S3'

const Products = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const [cost, setCost] = useState('');
    const [productName, setProductName] = useState('');
    const [productItems, setProductItems] = useState([]);
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [file, setFile] = useState([]);

    const { Content } = Layout;

    const handleClose = () => setShow(false);

    const { items, addItem, getItemsNextToken, itemsLoading } = useContext(ProductContext);
    const categoryContext = useContext(CategoriesContext);
    const subCategoryContext = useContext(SubCategoriesContext);

    const setProduct = async () => {
        addItem({ id: 542, cost: cost, name: productName })
        setEdit(false);
        setAdd(false);
        console.log(category)
        console.log(subCategory)

        const images = await transformAndUploadImages("PRODUCTOS", productName, file);
        console.log(images)
    }

    useMemo(() => {
        setProductItems(items.map(e => ({
            nombre: e.name,
            costo: e.cost,
            acciones: [
                { id: e.id, color: 'blue', icon: EditOutlined, onClicAction: () => { console.log(e) } },
                { id: e.id, color: 'red', icon: DeleteOutlined, onClicAction: () => { console.log(e.id) } }
            ],
            id: e.id
        })))
    }, [items]);

    const inputs = [
        { label: "Nombre", type: "text", readOnly: (!edit && !add), onChange: e => setProductName(e.target.value), value: productName },
        { label: "Costo", type: "number", readOnly: (!edit && !add), onChange: e => setCost(e.target.value), value: cost },
        { label: "Categoria", items: categoryContext.items, type: "select", readOnly: (!edit && !add), onChange: _ => setCategory(_), getItemsNextToken: categoryContext.getItemsNextToken },
        { label: "Sub Categoria", items: subCategoryContext.items, type: "select", readOnly: (!edit && !add), onChange: _ => setSubCategory(_), getItemsNextToken: subCategoryContext.getItemsNextToken },
        { label: "Imagen", type: "file", readOnly: (!edit && !add), onChange: _ => { setFile(_.target.files[0]) } }
    ];

    return (
        <Content>
            <h3 className="ttl-1" >Productos</h3>
            <CustomButton className="btn-1" style="blue" intent="Primary" onClick={(e) => { e.preventDefault(); setAdd(true); setShow(true); }} Icon={PlusCircleOutlined}></CustomButton>
            <CustomTable headers={['Nombre', 'Costo', 'Acciones']} items={productItems} itemsLoading={itemsLoading} getItemsNextToken={getItemsNextToken} />
            {/* Modal para editar y ver detalle de productos */}
            <CustomModal title={edit ? 'Editar Producto' : add ? 'Agregar Producto' : 'Ver Producto'} visible={show} onOk={setProduct} onCancel={handleClose} inputs={inputs} />
        </Content>
    )
}

export default Products;