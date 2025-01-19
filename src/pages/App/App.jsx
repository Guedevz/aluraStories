// Router.......................
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { PostProvider } from '../../context'

// Components...................
import Navbar from '../../components/Navbar'

// Pages.........................
import Home from '../Home'
import CreatePosts from '../CreatePosts'
import DeletePost from '../DeletePost'
import EditPost from '../EditPost'
import Favorites from '../Favorites'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
import SignIn from '../SignIn'


// Styles.........................
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/create-posts', element: <CreatePosts /> },
    { path: '/posts/:id/delete', element: <DeletePost /> },
    { path: '/posts/:id/edit', element: <EditPost /> },
    { path: '/favorites', element: <Favorites /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/web-development', element: <Home /> },
    { path: '/data-science', element: <Home /> },
    { path: '/marketing', element: <Home /> },
    { path: '/digital-content', element: <Home /> },
    { path: '/blockchain-web3', element: <Home /> },
    { path: '/cybersecurity', element: <Home /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <PostProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </PostProvider>
  )
}

export default App