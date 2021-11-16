import React from "react";
import { Layout } from 'antd';

import Products from "./Products";
import Services from "./Services";

const Business = () => {
    const { Sider, Content } = Layout;

    return (
        <Layout>
            <Sider>Sider</Sider>
            <Content >
                <Products />
                <Services />
            </Content>
        </Layout>
    )
}

export default Business;