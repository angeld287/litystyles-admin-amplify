import React from 'react';
import { Menu } from 'antd';

const DropDownMenu = ({ items }) => {

    return (
        <Menu>
            {
                items.map(_ =>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            1st menu item
                        </a>
                    </Menu.Item>)
            }
        </Menu>
    );
}

export default DropDownMenu;