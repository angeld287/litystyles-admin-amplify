import React from "react";
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        // También puedes registrar el error en un servicio de reporte de errores
        //logErrorToMyService(error, errorInfo);
        console.log('componentDidCatch', error, errorInfo);
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            // Puedes renderizar cualquier interfaz de repuesto
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.any
}

export default ErrorBoundary;
