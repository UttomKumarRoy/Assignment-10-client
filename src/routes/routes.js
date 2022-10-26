import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Main from '../layout/Main'
import Profile from '../components/Profile'
import PrivateRoute from './PrivateRoute'
import Courses from '../components/Courses'
import Blog from '../components/Blog'
import FAQ from '../components/FAQ'
import ToggleTheme from '../components/ToggleTheme'
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
        path: '/home',
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
        path: '/toggle',
        element: <ToggleTheme />
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
        path: '/checkout',
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://programming-language-server.vercel.app/course/${params.id}`)
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
