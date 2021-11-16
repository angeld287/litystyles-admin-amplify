import React from 'react';
import { Button } from "antd";
import PropTypes from "prop-types";

const CustomButton = ({ _key, onClick, children, type, loading }) => {
    return <Button type={type} loading={loading} key={_key} onClick={onClick} >{children}</Button>;
};


CustomButton.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    _key: PropTypes.string
}

export default CustomButton;
