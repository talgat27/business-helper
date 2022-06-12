import './App.css';
<<<<<<< HEAD
import Header from './components/Header/Header';
import FirstPage from './components/FirstPage/FirstPage'

function App() {
  return (
    <>
      <Header />
      <FirstPage />
    </>
=======
import BlockInfo from './components/BlockInfo/BlockInfo';
import CompanyRegistration from './pages/CompanyRegistration/CompanyRegistration';
import Tabs from './components/Tabs/Tabs';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs'
import Contacts from './components/Contacts/Contacts'
import Clients from './components/Clients/Clients'

function App() {
  return (
    <div className="App">
      <BlockInfo />
      <CompanyRegistration />
      <Tabs />
      <Routes>
        <Route path='/AboutUs/AboutUs' element={<AboutUs />} />
        <Route path='/Clients/Clients' element={<Clients />} />
        <Route path='/Contacts/Contacts' element={<Contacts />} />
      </Routes>
    </div>
>>>>>>> 116798f71305f54a99f9abe30b7d8a4c8e3e1ba3
  );
}

export default App;
