import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import News from './components/news/News.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route exact path='' element={<News key='all' />} />
      <Route exact path='/health' element={<News key='health' category='health' />} />
      <Route exact path='/sports' element={<News key='sports' category='sports'/>} />
      <Route exact path='/technology' element={<News key='technology' category='technology'/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
