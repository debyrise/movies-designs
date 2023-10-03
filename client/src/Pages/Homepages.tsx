import React, { useState } from 'react'
import Hero from '../component/Hero'
import Card from '../component/Commons/Card'
import SearchedCard from '../component/Commons/Searchcards'

const Homepages : React.FC= () => {
  const [keyword, setkeyword] = useState ("")
  return (
    <div  style={{color : "white", minHeight: "100vh"}}>
        < Hero  />

        <input onChange={(e) => {setkeyword(e.target.value)}} />
        <h2  style={{
          display: 'flex',
          justifyContent:"center",
          alignItems: "center",
        }}>
         For You
        </h2>
        <SearchedCard keyword= {keyword}  />
        <br />
        <br />
        <h2  style={{display: "flex", 
           justifyContent: "center",
           alignContent: "center"
          }}>
         MOVIES
        </h2>
        <Card  />
    </div>
  )
}

export default Homepages