import React from "react";
import PropTypes from 'prop-types'
import { BugFilled } from '@ant-design/icons'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        // También puedes registrar el error en un servicio de reporte de errores
        //logErrorToMyService(error, errorInfo);
        //console.log('componentDidCatch', error, errorInfo);
        this.setState({ hasError: true, error, errorInfo })
    }

    render() {
        if (this.state.hasError) {
            // Puedes renderizar cualquier interfaz de repuesto
            return (
                <>
                    <BugFilled style={{ fontSize: '50px', color: 'red' }} />;
                    <h1>Something went wrong.</h1>
                </>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.any
}

export default ErrorBoundary;
