import React, { useState } from "react";
import { Layout } from 'antd';
import CustomTable from '../../../components/CustomTable/CustomTable'
import CustomButton from '../../../components/CustomButton'
import { PlusCircleOutlined } from "@ant-design/icons";

const SERVICES_ITEMS = [
    { id: 1, name: 'Corte Adulto', cost: '250', actions: null },
    { id: 2, name: 'Corte Nino', cost: '150', actions: [{ color: 'primary', icon: 'edit', onClicAction: () => { console.log('exito') } }] },
    { id: 3, name: 'Facial', cost: '100', actions: null },
    { id: 4, name: 'Manicure', cost: '300', actions: null }
];

const Services = () => {
    const { Content } = Layout;
    const [error, setError] = useState(false);

    if (error) {
        throw new Error('I crashed!')
    }

    return (
        <Content>
            <h3 className="mt-5">Servicios</h3>
            <CustomButton className="btn-1" style="blue" intent="Primary" onClick={(e) => { e.preventDefault(); setError(true) }} Icon={PlusCircleOutlined}></CustomButton>
            <CustomTable headers={['No.', 'Nombre', 'Costo', 'Accion']} items={SERVICES_ITEMS} />
        </Content>
    )
}

export default Services;