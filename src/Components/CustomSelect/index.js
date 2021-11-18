import React from 'react';
import PropTypes from "prop-types";
import { Select } from "antd"

const CustomSelect = ({ className, items }) => {
    const options = items !== undefined ? items.map(_ => <Select.Option key={_.id}>{_.name}</Select.Option>) : [];

    return <Select
        className={className}
        //showSearch
        //value={this.state.value}
        placeholder="nombre de la lista"
    //style={this.props.style}
    //defaultActiveFirstOption={false}
    //showArrow={false}
    //filterOption={false}
    //onSearch={this.handleSearch}
    //onChange={this.handleChange}
    //notFoundContent={null}
    >
        {options}
    </Select>;
};

CustomSelect.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array
}

export default CustomSelect;
