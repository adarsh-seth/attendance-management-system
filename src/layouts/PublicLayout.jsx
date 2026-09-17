
import Navbar from '../Components/navbar/Navbar'
import Footer from '../Components/common/Footer'
import { Outlet } from 'react-router'

const PublicLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default PublicLayout