import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {!isHome && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  )
}
