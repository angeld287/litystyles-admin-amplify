import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { Modal } from 'antd';
import CustomInput from '../CustomInput';
import CustomSelect from '../CustomSelect';

const CustomModal = ({ title, visible, onOk, onCancel, inputs }) => {

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            console.log(isMounted)
        }

        return () => { isMounted = false }
    }, []);

    return (
        <>
            {
                visible &&
                <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
                    <div className="modal-1">
                        {inputs.map(_ => {
                            const _k = _.label.toLowerCase().replace(" ", "_");
                            if (_.type === 'text' || _.type === 'number')
                                return <div key={"div_" + _k} className="field-modal-1"><CustomInput key={_k} label={_.label} type={_.type} readOnly={_.readOnly} onChange={_.onChange} value={_.value}></CustomInput></div>
                            if (_.type === 'select')
                                return <div key={"div_" + _k} className="field-modal-1"><CustomSelect key={_k} className="slc-1" items={_.items} onChange={_.onChange} getItemsNextToken={_.getItemsNextToken} placeHolder={_.label} /></div>
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
}

export default CustomModal;
