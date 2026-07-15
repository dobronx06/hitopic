import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Gam360 from './pages/Gam360'
import GoogleAdx from './pages/GoogleAdx'
import HeaderBidding from './pages/HeaderBidding'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/google-ad-manager-360" element={<Gam360 />} />
          <Route path="/google-adx" element={<GoogleAdx />} />
          <Route path="/header-bidding" element={<HeaderBidding />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
