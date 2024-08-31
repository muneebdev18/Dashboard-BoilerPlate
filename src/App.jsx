import { Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/products/Products';
import Sidebar from './components/sidebar/Sidebar';
import Splash from './pages/splash/Splash';
import {useLocation} from 'react-router-dom'
function App() {
  const location = useLocation();
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100'>
      <div className='fixed inset-0 -z-10'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
        <div className='absolute inset-0 backdrop-blur-sm'/>
      </div>
    {location.pathname === '/' ? '':<Sidebar /> } 
      <div className='flex-1 overflow-y-auto'>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/product' element={<Products />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
