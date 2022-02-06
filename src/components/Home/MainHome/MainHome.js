import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import Home from '../Home/Home';
import MineralComposition from '../MineralComposition/MineralComposition';
import OurBlogs from '../OurBlogs/OurBlogs';
import Services from '../Services/Services';

const MainHome = () => {
    return (
        <>
         <Home></Home>
         <MineralComposition></MineralComposition>  
         <Services></Services>
         <AboutUs></AboutUs>
         <OurBlogs></OurBlogs>
        </>
    );
};

export default MainHome;