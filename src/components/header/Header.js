import React from 'react';
import './Header.css'
import HeaderMain from "./header__main/HeaderMain";
import HeaderNav from "./header__nav/HeaderNav";

const Header = (props) => {
    return <>
        <div className="header__main">
            <div className="container">
                <HeaderMain />
            </div>
        </div>
        <div className="container nav-search">
            <div className="header__nav">
                <HeaderNav logo={props.logo}/>
            </div>
            <div className="header__search">
            </div>
        </div>
    </>
};

export default Header;