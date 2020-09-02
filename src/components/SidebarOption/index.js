import React from 'react';

import './styles.css';

function SidebarOption({ active, Icon, text }) {
    return (
        <div className={`sidearOption ${active && 'sidearOption--active'}`}>
            <Icon />
            <h2>{ text }</h2>
        </div>
    );
}

export default SidebarOption;