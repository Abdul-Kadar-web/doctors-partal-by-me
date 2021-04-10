import React from 'react';
import Businessinfo from '../Businessinfo/Businessinfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navber from '../Navber/Navber';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navber></Navber>
            <HeaderMain></HeaderMain>
            <Businessinfo></Businessinfo>
        </div>
    );
};

export default Header;