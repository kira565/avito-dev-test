import React from 'react';
import './App.css';
import LayoutContainer from "./components/layout/LayoutContainer";
import HeaderContainer from "./components/header/HeaderContainer";

const App = () => {
    return <>
        <section className="header">
            <HeaderContainer/>
        </section>
        <section className="main">
            <div className="container main">
                <LayoutContainer/>
            </div>
        </section>
    </>
};

export default App;
