import React from 'react';
import PropTypes from "prop-types";
import { Input } from 'antd';
import "./customInput.css"

const CustomInputFile = ({ dataTestId, type, readOnly, onChange, label }) => {
    return (
        <>

            <Input data-testid={dataTestId} className="inpt-1" size="large" type={type} readOnly={readOnly} addonBefore={label} onClick={e => e.target.value = null} onChange={onChange} autoComplete="off" accept="image/*" />
        </>
    );
};

CustomInputFile.propTypes = {
    dataTestId: PropTypes.string,
    readOnly: PropTypes.bool,
    type: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string
}

export default CustomInputFile;
