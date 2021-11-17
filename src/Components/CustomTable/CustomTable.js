import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Space } from 'antd';

import CustomButton from '../CustomButton';

const CustomTable = ({ headers, items }) => {
    const [index, setIndex] = useState(1)
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
                            btns.map(_ => <CustomButton color={_.color} Icon={_.icon} key={_.id + _.icon} onClick={_.onClicAction} />)
                        }
                    </Space>
                ),
            })
        }
    });
    const _items = items.map(_ => ({ ..._, key: _.id }));

    const onChangeTable = (e) => {
        setIndex(e.current);
    }

    return (
        <div style={{ marginTop: 20 }}>
            <Table
                columns={_headers}
                dataSource={_items}
                pagination={{ current: index, pageSize: 5 }}
                loading={false}
                onChange={onChangeTable}
            />
        </div>
    )
}

CustomTable.propTypes = {
    items: PropTypes.array,
    headers: PropTypes.array
}

export default CustomTable;