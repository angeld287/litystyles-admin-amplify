import React from 'react';
import PropTypes from "prop-types";
import { Modal } from 'antd';
import CustomInput from '../CustomInput';
import CustomSelect from '../CustomSelect';

const CustomModal = ({ title, visible, onOk, onCancel, inputs }) => {
    return (

        <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
            {inputs.map(_ => {
                if (_.type === 'text' || _.type === 'number')
                    return <CustomInput key={_.label.toLowerCase().replace(" ", "_")} label={_.label} type={_.type} readOnly={_.readOnly} onChange={_.onChange} value={_.value}></CustomInput>
                if (_.type === 'select')
                    return <CustomSelect key={_.label.toLowerCase().replace(" ", "_")} className="slc-1" items={_.items} onChange={_.onChange} />
            })}
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
