import React from "react";
import { Container, Row } from "react-bootstrap";
import CustomTable from '../../../components/CustomTable/CustomTable'

const PRODUCTS_ITEMS = [
    { id: 1, name: 'shampoo', cost: '200', actions: null },
    { id: 2, name: 'shampoo', cost: '200', actions: [{ color: 'primary', icon: 'edit', onClicAction: () => { console.log('exito') } }] },
    { id: 3, name: 'shampoo', cost: '200', actions: null },
    { id: 4, name: 'shampoo', cost: '200', actions: null }
];

const Products = () => {
    return (
        <Container fluid>
            <h3 className="mt-5">Productos</h3>
            <Row>
            </Row>
            <div style={{ marginTop: 20 }}>
                <CustomTable headers={['No.', 'Nombre', 'Costo', 'Accion']} items={PRODUCTS_ITEMS} />
            </div>
        </Container>
    )
}

export default Products;