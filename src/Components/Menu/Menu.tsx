import React from 'react';
import s from './Menu.module.css'
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <div className={s.men}>
            <div><NavLink to={"/Profile"} activeClassName={s.activLink}>Profile</NavLink></div>
            <div><NavLink to={"/Dialogs"} activeClassName={s.activLink}>Message</NavLink></div>
            <div><NavLink to={"/Music"} activeClassName={s.activLink}>Music</NavLink></div>
            <div><NavLink to={"/Settings"} activeClassName={s.activLink}> Settings </NavLink></div>

        </div>
    );
}

export default Menu;

