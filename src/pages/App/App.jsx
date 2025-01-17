// Router.......................
import { useRoutes, BrowserRouter } from 'react-router-dom'

// Components...................
import Navbar from '../../components/Navbar'
import FavoritesPostProvider from '../../context'

// Pages.........................
import Home from '../Home'
import Authors from '../Authors'
import AuthorPosts from '../AuthorPosts'
import CategoryPosts from '../CategoryPosts'
import CreatePosts from '../CreatePosts'
import Dashboard from '../Dashboard'
import DeletePost from '../DeletePost'
import EditPost from '../EditPost'
import Favorites from '../Favorites'
import Logout from '../Logout'
import MyAccount from '../MyAccount'
import NotFound from '../NotFound'
// import PostDetail from '../PostDetail'
import Register from '../Register'
import SignIn from '../SignIn'
import UserProfile from '../UserProfile'


// Styles.........................
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/authors', element: <Authors /> },
    { path: '/posts/user/:id', element: <AuthorPosts /> },
    { path: '/posts/categories/:category', element: <CategoryPosts /> },
    { path: '/create-posts', element: <CreatePosts /> },
    { path: '/my-posts/:id', element: <Dashboard /> },
    { path: '/posts/:id/delete', element: <DeletePost /> },
    { path: '/posts/:id/edit', element: <EditPost /> },
    { path: '/favorites', element: <Favorites /> },
    { path: '/logout', element: <Logout /> },
    { path: '/my-account', element: <MyAccount /> },
    // { path: '/posts/:id', element: <PostDetail /> },
    { path: '/register', element: <Register /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/profile/:id', element: <UserProfile /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <FavoritesPostProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </FavoritesPostProvider>
  )
}

export default App