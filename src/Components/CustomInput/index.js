import React from 'react';
import PropTypes from "prop-types";
import { Input } from 'antd';
import "./customInput.css"

const CustomInput = ({ type, onChange, value, label, readOnly }) => {
    return (
        <Input className="inpt-1" size="large" type={type} readOnly={readOnly} onChange={onChange} value={value} placeholder={label} />
    );
};

CustomInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    type: PropTypes.string
}

export default CustomInput;
