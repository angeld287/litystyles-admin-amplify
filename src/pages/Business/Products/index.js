import React, { useState, useContext, useMemo } from "react";
import { Layout } from 'antd';
import CustomButton from "../../../components/CustomButton";
import CustomTable from '../../../components/CustomTable/CustomTable'
import CustomModal from "../../../components/CustomModal";
import { ProductContext } from "../../../providers/products/products.provider";

const Products = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const [cost, setCost] = useState('');
    const [productName, setProductName] = useState('');
    const [productItems, setProductItems] = useState([]);

    const { Content } = Layout;


    const handleClose = () => setShow(false);

    const { items, addItem } = useContext(ProductContext);

    const setProduct = () => {
        addItem({ id: 542, cost: cost, name: productName })
        setEdit(false);
        setAdd(false);
    }

    useMemo(() => {
        const product_items = [];
        items.forEach(e => {
            const product_item = {
                name: e.name,
                cost: e.cost,
                actions: [{ color: 'primary', icon: 'edit', onClicAction: () => { console.log(e) } }],
                id: e.id
            };
            product_items.push(product_item)
        });
        setProductItems(product_items)
    }, [items]);

    const inputs = [
        { label: "Nombre", type: "text", readOnly: (!edit && !add), onChange: e => setProductName(e.target.value), value: productName },
        { label: "Costo", type: "number", readOnly: (!edit && !add), onChange: e => setCost(e.target.value), value: cost }
    ]

    return (
        <Content>
            <h3 className="mt-5">Productos</h3>
            <CustomButton intent="Primary" onClick={(e) => { e.preventDefault(); setAdd(true); setShow(true); }} icon="add"></CustomButton>

            <CustomTable headers={['Nombre', 'Costo', 'Accion']} items={productItems} />
            {/* Modal para editar y ver detalle de productos */}

            <CustomModal title={edit ? 'Editar Producto' : add ? 'Agregar Producto' : 'Ver Producto'} visible={show} onOk={setProduct} onCancel={handleClose} inputs={inputs} />
        </Content>
    )
}

export default Products;