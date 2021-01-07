import React from 'react';
import s from './Menu.module.css'

function Menu() {
    return (
        <div className={s.men}>
            <div>Main</div>
            <div>Message</div>
            <div>Music</div>
            <div>Settings</div>

        </div>
    );
}

export default Menu;
