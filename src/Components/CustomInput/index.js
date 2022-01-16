import React from 'react';
import PropTypes from "prop-types";
import { Input } from 'antd';
import "./customInput.css"

const CustomInput = ({ dataTestId, type, onChange, value, label, readOnly }) => {
    return (
        <Input data-testid={dataTestId} className="inpt-1" size="large" type={type} readOnly={readOnly} onChange={onChange} value={value} placeholder={label} />
    );
};

CustomInput.propTypes = {
    dataTestId: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    type: PropTypes.string
}

export default CustomInput;
