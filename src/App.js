import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Registration from './pages/Registration/Registration';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/HomePage/HomePage" />} />
          <Route path='/HomePage/HomePage/*' element={<Header login={true}><HomePage /></Header>} />
          <Route path='/Login/Login' element={<Header login={false}><Login /></Header>} />
          <Route path='/Registration/Registration' element={<Header login={false}><Registration /></Header>} />
          <Route path='/WelcomePage/WelcomePage' element={<SidebarMenu><WelcomePage /></SidebarMenu>} />
        </Routes>
    </div>
  );
}

export default App;
