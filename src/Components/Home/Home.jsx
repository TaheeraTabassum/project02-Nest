import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import FeatureCategory from '../FeatureCategory/FeatureCategory';
import MediumBanner from '../MediumBanner/MediumBanner';
import ProductsCategory from '../ProductsComponents/ProductsCategory';
import BestCells from '../BestCells/BestCells';
import Countdown from '../Countdown/Countdown';
import TopCelling from '../TopCelling/TopCelling';
import Banner2 from '../Shared/Banner2';
import SmallCart from '../SmallCart/SmallCart';
import bgImage1 from '../../assets/banner-10.png'
import image from '../../assets/banner-9.png'


const Home = () => {
     const [products,setProducts] =useState([])
            useEffect(()=>{
                 fetch('/Produts.json')
                 .then(res =>res.json())
                 .then(data=>setProducts(data))
            },[])
           
    return (
        <div>
            <Banner></Banner>
            <FeatureCategory></FeatureCategory>
            <MediumBanner></MediumBanner>
            <ProductsCategory></ProductsCategory>
            <BestCells products={products}></BestCells>
            {/* <Countdown ml1="lg:ml-6 ml-11" ml2="lg:ml-7 ml-11" weidth="lg:w-60 w-65" p="p-3" text="text-1xl" t="lg:top-25 top-15" top="lg:top-45 top-35"></Countdown> */}
            <TopCelling products={products}></TopCelling>
            <Banner2 bgImage1={bgImage1} image={image} w="w-130 " mt="mt-16" ml="lg:ml-20 " title={`Stay home & get your daily needs from our shop`} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with " ></Banner2>
            <SmallCart></SmallCart>
        </div>
    );
};

export default Home;