import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs'
import Contacts from '../Contacts/Contacts'
import ORG from '../ORG/ORG'

export default function Tabs() {
    return (
        <Routes>
            <Route path='/AboutUs/AboutUs' element={<AboutUs />} />
            <Route path='/ORG/ORG' element={<ORG />} />
            <Route path='/Contacts/Contacts' element={<Contacts />} />
        </Routes>
    )
}