import React from 'react';
import styles from './HeaderNav.module.css'
import {NavLink} from "react-router-dom";


class HeaderNav extends React.Component {
    render() {
        return <div className={styles.nav__wrapper}>
            <div className={styles.nav__logo}>
                <img alt="logo" src={this.props.logo}/>
            </div>
            <div className={styles.nav__panel}>
                <NavLink  activeClassName={styles.active__link} to="/immovable">Недвижимость</NavLink>
                <NavLink  activeClassName={styles.active__link} to="/cameras">Фотоаппараты </NavLink>
                <NavLink  activeClassName={styles.active__link} to="/auto">Автомобили</NavLink>
                <NavLink  activeClassName={styles.active__link} to="/laptops">Ноутбуки</NavLink>
            </div>
        </div>
    }
}

export default HeaderNav;