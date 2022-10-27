import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Main from '../layout/Main'
import PrivateRoute from './PrivateRoute'
import Courses from '../components/Courses'
import Blog from '../components/Blog'
import FAQ from '../components/FAQ'
import CourseDetails from '../components/CourseDetails'
import CheckOut from '../components/CheckOut'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      
      {
        path: '/courses',
        element: <Courses />,
        loader: () => fetch('https://programming-language-server.vercel.app/course')
      },
      {
        path: '/courses/:id',
        element: <CourseDetails />,
        loader: ({params}) => fetch(`https://programming-language-server.vercel.app/course/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/faq',
        element: <FAQ />
      },
     
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/checkout/:id',
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://programming-language-server.vercel.app/course/${params.id}`)
      },
      
    ],
  },
])

export default router
