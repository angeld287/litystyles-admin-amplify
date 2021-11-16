import React, { useState, useContext, useMemo } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton";
import CustomTable from '../../../components/CustomTable/CustomTable'
import CustomTextBox from "../../../components/CustomTextBox";
import { ProductContext } from "../../../providers/products/products.provider";

const Products = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const [cost, setCost] = useState('');
    const [productName, setProductName] = useState('');
    const [productItems, setProductItems] = useState([]);

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

    return (
        <Container fluid>
            <h3 className="mt-5">Productos</h3>
            <CustomButton intent="Primary" onClick={(e) => { e.preventDefault(); setAdd(true); setShow(true); }} icon="add"></CustomButton>
            <Row>
                <CustomTable headers={['Nombre', 'Costo', 'Accion']} items={productItems} />
            </Row>
            {/* Modal para editar y ver detalle de productos */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{edit ? 'Editar Producto' : add ? 'Agregar Producto' : 'Ver Producto'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CustomTextBox controlId="name" label="Nombre" type="text" readOnly={!edit && !add} onChange={e => setProductName(e.target.value)} value={productName} />
                    <CustomTextBox controlId="cost" label="Costo" type="number" readOnly={!edit && !add} onChange={e => setCost(e.target.value)} value={cost} />
                </Modal.Body>
                <Modal.Footer>
                    <CustomButton variant="secondary" onClick={handleClose}>
                        Cerrar
                    </CustomButton>
                    {(edit || add) &&
                        <CustomButton variant="primary" onClick={setProduct}>
                            Guardar
                        </CustomButton>
                    }
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default Products;