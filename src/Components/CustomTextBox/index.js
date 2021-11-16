import React from 'react';
import PropTypes from "prop-types";
import { Form } from 'react-bootstrap';

const CustomTextBox = ({ controlId, type, onChange, value, label, readOnly }) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control readOnly={readOnly} type={type} onChange={onChange} value={value} />
        </Form.Group>
    );
};


CustomTextBox.propTypes = {
    controlId: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    type: PropTypes.string
}

export default CustomTextBox;
