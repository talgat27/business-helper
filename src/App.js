import './App.css';
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
  );
}

export default App;
