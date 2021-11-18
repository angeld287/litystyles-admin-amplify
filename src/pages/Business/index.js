import React from "react";
import { Layout, Row, Col } from 'antd';

import Products from "./Products";
import Services from "./Services";

const Business = () => {
    const { Content } = Layout;

    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}>
                        <div className="site-layout-content"><Products /></div>
                    </Col>
                    <Col span={12}>
                        <div className="site-layout-content"><Services /></div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default Business;