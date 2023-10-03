import React from 'react'
import Header from '../blockes/Header'
import Footer from '../blockes/Footer'
import   {Outlet}  from "react-router-dom"
// import Detailpages from '../../Pages/Detailpages'

const weblayouts:React.FC = () => {
  return (
    <div>
      <Header />
      < Outlet />
      {/* <Detailpages/> */}
      <Footer />
      

    </div>
  )
}

export default weblayouts