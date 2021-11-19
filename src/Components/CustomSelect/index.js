import React from 'react';
import PropTypes from "prop-types";
import { Select } from "antd"

const CustomSelect = ({ className, items, onChange, defaultValue, placeHolder }) => {
    const options = items !== undefined ? items.map(_ => { return <Select.Option key={_.id}>{_.name}</Select.Option> }) : [];

    return <Select
        className={className}
        loading={true}
        showSearch
        style={{ width: '100%' }}
        defaultValue={defaultValue}
        placeholder={placeHolder !== undefined ? placeHolder : "Nombre del Campo"}
        defaultActiveFirstOption={false}
        showArrow={false}
        onChange={onChange}
        optionFilterProp="children"
        filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }

    >
        {options}
    </Select>;
};

CustomSelect.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    placeHolder: PropTypes.string
}

export default CustomSelect;
