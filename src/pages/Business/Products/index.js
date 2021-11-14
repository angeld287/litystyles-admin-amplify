import { Button } from "@blueprintjs/core";
import React, { useState } from "react";
import { Container, Form, Modal, Row } from "react-bootstrap";
import CustomTable from '../../../components/CustomTable/CustomTable'

//import { ProductContext } from '../../providers/products/products.provider';

const PRODUCTS_ITEMS = [
    { id: 1, name: 'shampoo', cost: '200', actions: null },
    { id: 2, name: 'Tijeras', cost: '500', actions: [{ color: 'primary', icon: 'edit', onClicAction: () => { console.log('exito') } }] },
    { id: 3, name: 'Gelatina', cost: '300', actions: null },
    { id: 4, name: 'Pinchos', cost: '50', actions: null }
];

const Products = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const [cost, setCost] = useState('');
    const [qty, setQty] = useState('0');
    const [productName, setProductName] = useState('');

    const handleClose = () => setShow(false);
    const handlen = () => {
        setEdit(true);
        setAdd(true);
        setProductName(true);
    }

    //const { items, addItem } = useContext(ProductContext);
    //addItem({ id: 1, name: 'shampoo' })

    //console.log(items)
    return (
        <Container fluid>
            <h3 className="mt-5">Productos</h3>
            <Button intent="Primary" onClick={(e) => { e.preventDefault(); setAdd(true); setShow(true); }} icon="add"></Button>
            <Row>
                <CustomTable headers={['No.', 'Nombre', 'Costo', 'Accion']} items={PRODUCTS_ITEMS} />
            </Row>
            {/* Modal para editar y ver detalle de productos */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{edit ? 'Editar Producto' : add ? 'Agregar Producto' : 'Ver Producto'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control readOnly={true} type="text" value={productName} />
                    </Form.Group>
                    <Form.Group controlId="cost">
                        <Form.Label>Costo</Form.Label>
                        <Form.Control readOnly={!edit && !add} type="number" value={cost} onChange={e => setCost(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="qty">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control readOnly={!edit && !add} type="number" value={qty} onChange={e => setQty(e.target.value)} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    {(edit || add) &&
                        <Button variant="primary" onClick={handlen}>
                            Guardar
                        </Button>
                    }
                </Modal.Footer>
            </Modal>

        </Container>
    )
}

export default Products;