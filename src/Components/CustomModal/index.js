import React from 'react';
import PropTypes from "prop-types";
import { Modal } from 'antd';
import CustomInput from '../CustomInput';

const CustomModal = ({ title, visible, onOk, onCancel, inputs }) => {
    return (

        <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
            {inputs.map(_ => (
                <CustomInput label={_.label} type={_.type} readOnly={_.readOnly} onChange={_.onChange} value={_.value}></CustomInput>
            ))}
        </Modal>

    );
};


CustomModal.propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    inputs: PropTypes.array
}

export default CustomModal;
