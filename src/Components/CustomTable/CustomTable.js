import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import CustomButton from '../CustomButton';

const CustomTable = ({ headers, items }) => {
    return (
        <div style={{ marginTop: 20 }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {headers.map(_ => <th key={_}>{_}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {items.map(_ => {
                        const keys = Object.keys(_);
                        return (
                            <tr key={_.id}>
                                {
                                    keys.filter(_ => _ !== 'id').map(_k => (
                                        _k !== 'actions'
                                            ?
                                            <td key={_.id + _k}>{_[_k]}</td>
                                            :
                                            _[_k] !== null && _[_k] !== undefined
                                                ?
                                                <td key={_.id + _k}>{
                                                    _[_k].map(_a => {
                                                        const _sk = _.id + _k + _a.onClicAction;
                                                        return <CustomButton key={_sk} _key={_sk} style={{ marginRight: 1 }} onClick={_a.onClicAction} intent={_a.color} icon={_a.icon} ></CustomButton>
                                                    })
                                                }</td>
                                                :
                                                <td key={_.id + _k}></td>
                                    ))
                                }
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        </div>
    )
}

CustomTable.propTypes = {
    items: PropTypes.array,
    headers: PropTypes.array
}

export default CustomTable;