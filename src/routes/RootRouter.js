import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import { General } from '../pages/General'
import { Basket } from '../pages/General/Basket'
import { ThankYou } from '../pages/General/ThankYou'

const RootRouter = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <General /> },
        { path: '/shopping-cart', element: <Basket /> },
        { path: '/thank-you', element: <ThankYou /> },
      ],
    },
  ])

  return <RouterProvider router={routes} />
}
export default RootRouter
