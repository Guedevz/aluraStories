// Router.......................
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { PostProvider } from '../../context'

// Components...................
import Navbar from '../../components/Navbar'

// Pages.........................
import Home from '../Home'
import CreatePosts from '../CreatePosts'
import Favorites from '../Favorites'
import NotFound from '../NotFound'


// Styles.........................
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/create-posts', element: <CreatePosts /> },
    { path: '/favorites', element: <Favorites /> },
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