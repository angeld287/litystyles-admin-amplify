import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { Modal, Button } from 'antd';
import CustomInput from '../CustomInput';
import CustomSelect from '../CustomSelect';
import CustomInputFile from '../CustomInputFile';

const CustomModal = ({ fields, title, visible, onOk, onCancel, inputs, loading }) => {

    useEffect(() => {
        if (!visible) {
            const keys = Object.keys(fields);
            keys.forEach(e => {
                fields[e](null);
            });
        }
    }, [visible]);

    return (
        <>
            {
                visible &&
                <Modal
                    title={title}
                    visible={visible}
                    footer={[
                        <Button key="back" disabled={loading} onClick={onCancel}>Cancelar</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={onOk}>Guardar</Button>
                    ]}
                >
                    <div className="modal-1">
                        {inputs.map(_ => {
                            const _k = _.label.toLowerCase().replace(" ", "_");
                            if (_.type === 'text' || _.type === 'number')
                                return <div key={"div_" + _k} className="field-modal-1"><CustomInput key={_k} label={_.label} type={_.type} readOnly={_.readOnly} onChange={_.onChange} value={_.value}></CustomInput></div>
                            if (_.type === 'select')
                                return <div key={"div_" + _k} className="field-modal-1"><CustomSelect key={_k} className="slc-1" items={_.items} readOnly={_.readOnly} onChange={_.onChange} getItemsNextToken={_.getItemsNextToken} placeHolder={_.label} /></div>
                            if (_.type === 'file')
                                return <div key={"div_" + _k} className="field-modal-1"><CustomInputFile key={_k} label={_.label} type={_.type} className="slc-1" onChange={_.onChange} readOnly={_.readOnly} /></div>
                        })}
                    </div>
                </Modal>
            }

        </>
    );
};


CustomModal.propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    inputs: PropTypes.array,
    loading: PropTypes.bool,
    fields: PropTypes.object
}

export default CustomModal;
