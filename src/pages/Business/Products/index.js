import React, { useState, useContext, useMemo } from "react";
import { Container, Form, Modal, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton";
import CustomTable from '../../../components/CustomTable/CustomTable'
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
                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control readOnly={!edit && !add} type="text" onChange={e => setProductName(e.target.value)} value={productName} />
                    </Form.Group>
                    <Form.Group controlId="cost">
                        <Form.Label>Costo</Form.Label>
                        <Form.Control readOnly={!edit && !add} type="number" value={cost} onChange={e => setCost(e.target.value)} />
                    </Form.Group>
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