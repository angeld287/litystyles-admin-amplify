import React from "react";
import { Layout, Row, Col } from 'antd';

import Products from "./Products";
import Services from "./Services";
import ErrorBoundary from "../../Components/ErrorBoundary";

const Business = () => {
    const { Content } = Layout;

    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}>
                        <div className="site-layout-content">
                            <h3 className="ttl-1" >Productos</h3>
                            <ErrorBoundary>
                                <Products />
                            </ErrorBoundary>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="site-layout-content">
                            <h3 className="ttl-1" >Servicios</h3>
                            <ErrorBoundary>
                                <Services />
                            </ErrorBoundary>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default Business;