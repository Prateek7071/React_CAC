import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Layout from './Layout.jsx'
import { About, Contacts, Home, User } from './components/index.js'
import Github, { GithubInfo } from './components/Github/Github.jsx'
import { AboutPic } from './components/About/About.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>} />
      <Route
        loader={ AboutPic }
        path='about'
        element={<About></About>} />
      <Route path='contacts' element={<Contacts></Contacts> } />
      <Route path='user/:userId' element={<User></User> } />
      <Route
        loader = {GithubInfo}
        path='github'
        element={<Github />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
