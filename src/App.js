import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import Vans from './pages/Vans';

import "./server"
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansDetail from './pages/Host/HostVansDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPrincing from './pages/Host/HostVanPrincing';
import HostVanPhotos from './pages/Host/HostVanPhotos';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='vans' element={<Vans/>} />
          <Route path='vans/:id' element={<VanDetail />} />

          <Route path='host' element={<HostLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='income' element={<Income/>} />
            <Route path='reviews' element={<Reviews/>} />
            <Route path='vans' element={<HostVans/>} />
            <Route path='vans/:id' element={<HostVansDetail/>}>
              <Route index element={<HostVanInfo />}/>
              <Route path='pricing' element={<HostVanPrincing />}/>
              <Route path='photos' element={<HostVanPhotos />}/>
            </Route>
          </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
