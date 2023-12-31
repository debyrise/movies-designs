import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' 
import Index from "./routes/Allroutes"
import Globalstyles from "./assets/Globalstyles"
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Globalstyles />
    <RouterProvider router={Index} />

  </React.StrictMode>,
)
