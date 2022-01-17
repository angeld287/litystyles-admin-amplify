import React from "react";
import { Layout, Row, Col } from 'antd';

import Categories from "./Categories";
import ErrorBoundary from "../../Components/ErrorBoundary";

const Classifications = () => {
    const { Content } = Layout;

    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}>
                        <div className="site-layout-content">
                            <h3 className="ttl-1" >Categories</h3>
                            <ErrorBoundary>
                                <Categories />
                            </ErrorBoundary>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="site-layout-content">
                            <h3 className="ttl-1" >Sub-Categorias</h3>
                            <ErrorBoundary>
                                <Categories />
                            </ErrorBoundary>
                        </div>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={12}>
                        <div className="site-layout-content">
                            <h3 className="ttl-1" >Tipos</h3>
                            <ErrorBoundary>
                                <Categories />
                            </ErrorBoundary>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="site-layout-content">
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default Classifications;