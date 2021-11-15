import React from 'react';
import { Button } from "@blueprintjs/core";
import PropTypes from "prop-types";

const CustomButton = ({ _key, onClick, children, intent, icon }) => {
    return <Button key={_key} onClick={onClick} intent={intent} icon={icon}>{children}</Button>;
};


CustomButton.propTypes = {
    children: PropTypes.any,
    intent: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    _key: PropTypes.string
}

export default CustomButton;
