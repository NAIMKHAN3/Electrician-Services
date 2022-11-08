import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../Footers/Footers';


import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;