import React from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';

const Root = () => {
    return (
        <div className='px-3'>
          <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;