import React from "react";
import { Container, Row } from "react-bootstrap";
import CustomTable from '../../../components/CustomTable/CustomTable'

const SERVICES_ITEMS = [
    { id: 1, name: 'Corte Adulto', cost: '250', actions: null },
    { id: 2, name: 'Corte Nino', cost: '150', actions: [{ color: 'primary', icon: 'edit', onClicAction: () => { console.log('exito') } }] },
    { id: 3, name: 'Facial', cost: '100', actions: null },
    { id: 4, name: 'Manicure', cost: '300', actions: null }
];

const Services = () => {
    return (
        <Container fluid>
            <h3 className="mt-5">Servicios</h3>
            <Row>
                <CustomTable headers={['No.', 'Nombre', 'Costo', 'Accion']} items={SERVICES_ITEMS} />
            </Row>
        </Container>
    )
}

export default Services;