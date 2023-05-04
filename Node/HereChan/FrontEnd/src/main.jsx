import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import {RouterProvider , createBrowserRouter } from 'react-router-dom';
import Entrar from './Components/Routes/Entrar';
import Cadastrar from './Components/Routes/Cadastrar';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/entrar",
    element:<Entrar />
  },
  {
    path:"/cadastrar",
    element:<Cadastrar />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
