import React from "react";
import { Layout } from 'antd';

import Products from "./Products";
import Services from "./Services";

const Business = () => {
    const { Content } = Layout;

    return (
        <Layout>
            <Content >
                <Products />
                <Services />
            </Content>
        </Layout>
    )
}

export default Business;