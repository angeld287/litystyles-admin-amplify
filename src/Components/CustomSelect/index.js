import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Select } from "antd";

const CustomSelect = ({ items, onChange, defaultValue, getItemsNextToken, placeHolder }) => {
    const [loading, setLoading] = useState(false);
    const options = items !== undefined ? items.map(_ => { return <Select.Option key={_.id}>{_.name}</Select.Option> }) : [];

    const onScroll = async (event) => {
        var target = event.target
        if (!loading && getItemsNextToken !== undefined && Math.round(target.scrollTop + target.offsetHeight) === target.scrollHeight) {
            setLoading(true);
            await getItemsNextToken();
            setLoading(false);
        }
    }

    const _dvalue = typeof defaultValue === "string" ? defaultValue : "";
    console.log(defaultValue, placeHolder)

    return <Select
        loading={loading}
        showSearch
        style={{ width: '100%' }}
        placeholder={placeHolder !== undefined ? placeHolder : 'Nombre del Campo'}
        defaultValue={_dvalue !== undefined && _dvalue !== "" ? _dvalue : null}
        defaultActiveFirstOption={false}
        //showArrow={false}
        onChange={onChange}
        optionFilterProp="children"
        onPopupScroll={onScroll}
        filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
    >
        {!loading ? options : [...options, <Select.Option key="loading">Loading...</Select.Option>]}
    </Select>;
};

CustomSelect.propTypes = {
    items: PropTypes.array,
    defaultValue: PropTypes.any,
    onChange: PropTypes.func,
    placeHolder: PropTypes.string,
    loading: PropTypes.bool,
    getItemsNextToken: PropTypes.func
}

export default CustomSelect;
