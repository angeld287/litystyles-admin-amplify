import React from 'react';
import PropTypes from 'prop-types';
import { Table, Space } from 'antd';
import CustomButton from '../CustomButton';

const CustomTable = ({ headers, items }) => {
    const _headers = headers.map(_ => {
        if (_ !== 'Acciones') {
            return ({ title: _, dataIndex: _.toLowerCase(), key: _.toLowerCase() })
        } else {
            return ({
                title: _,
                key: _.toLowerCase(),
                dataIndex: _.toLowerCase(),
                render: (btns) => (
                    <Space size="middle">
                        {
                            btns.map(_ => <CustomButton key={_.id + _.icon} onClick={_.onClicAction}>{_.icon}</CustomButton>)
                        }
                    </Space>
                ),
            })
        }
    });
    const _items = items.map(_ => ({ ..._, key: _.id }));
    return (
        <div style={{ marginTop: 20 }}>
            <Table columns={_headers} dataSource={_items} />
        </div>
    )
}

CustomTable.propTypes = {
    items: PropTypes.array,
    headers: PropTypes.array
}

export default CustomTable;