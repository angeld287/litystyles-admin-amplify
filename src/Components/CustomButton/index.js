import React from 'react';
import { Button } from "antd";
import PropTypes from "prop-types";

const CustomButton = ({ _key, onClick, children, type, loading, Icon, color }) => {
    return <Button
        style={{ color: color }}
        icon={Icon === undefined ? null : <Icon />}
        type={type}
        loading={loading}
        key={_key}
        onClick={onClick}>
        {children}
    </Button>;
};

CustomButton.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    _key: PropTypes.string,
    Icon: PropTypes.any,
    color: PropTypes.string
}

export default CustomButton;
