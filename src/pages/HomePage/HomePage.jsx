import React from 'react'
import Slider from '../../components/Slider/Slider'
import BlockInfo from '../../components/BlockInfo/BlockInfo';
import Tabs from '../../components/Tabs/Tabs';
import Footer from '../../components/Footer/Footer';
import AboutUs from '../../components/AboutUs/AboutUs'
import { useState } from 'react';

export default function HomePage() {
    const [Tab, SetTab] = useState(<AboutUs />);
    console.log(Tab);

    return (
        <>
            <Slider />
            <Tabs SetTab={SetTab}/>
            {Tab}
            <BlockInfo />
            <Footer />
        </>
    )
}