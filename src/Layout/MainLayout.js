import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Nav/Footer'
import { Navbar } from '../components/Nav/Navbar'
import { useScrollDirection } from '../hooks/useScrollDirection'

const MainLayout = () => {
  const scrollDirection = useScrollDirection()

  return (
    <div className='h-screen'>
      <Navbar scrollDirection={scrollDirection} />
      <div className='min-h-full bg-deep-blue'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
