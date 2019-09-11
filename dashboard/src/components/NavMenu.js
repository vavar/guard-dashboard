import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function NavMenu(props) {
    
    const { history , match } = props;
    const { path:activeItem } = match;
    const handleItemClick = (path) => { history.push(path) };

    return (
        <Menu pointing>
            <Menu.Item
                name='Submit New Scan Result'
                active={activeItem === '/'}
                onClick={() => handleItemClick('/')}
            />
            <Menu.Item
                name='List Scan Result'
                active={activeItem === '/repositories'}
                onClick={() => handleItemClick('/repositories')}
            />
        </Menu>
    );
}