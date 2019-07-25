import React from 'react';
import styles from './HeaderMain.module.css'
import {NavLink} from "react-router-dom";
import favourites from '../../../../src/etc/img/like_icon.png'

const HeaderMain = () => {
    return <div className={styles.main__wrapper}>
        <div className={styles.main__block}>
            <div className={styles.main__links}>
                <NavLink to='/'>Объявления</NavLink>
                <NavLink to='/'>Магазины</NavLink>
                <NavLink to='/'>Бизнес</NavLink>
                <NavLink to='/'>Помощь</NavLink>
            </div>
        </div>
        <div className={styles.main__block}>
            <div className={styles.main__favourites}>
                <NavLink to="/favourites"><img alt="избранное" src={favourites}/></NavLink>
            </div>
            <div className={styles.main__registration}>
                <NavLink to='/'>Вход и регистрация</NavLink>
            </div>
            <div className={styles.main__ad}>
                <NavLink to='/'>Подать объявление</NavLink>
            </div>
        </div>
    </div>
};

export default HeaderMain