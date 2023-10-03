// import styled from '@emotion/styled'
// import React,  {useState, useEffect} from 'react'
// import Genre from "../../genres.json"
// import { Link } from 'react-router-dom';

// const Container = styled.div`
//    margin-top: 200px;
//    flex-wrap: wrap;
//    width: 80%; 
//    position: absolute;
//    z-index: 100;
//    padding-left: 40px;
//    height: 200px;
//    background-color: #cbcaca;
//    align-items: center;
//    justify-content: center;
// `;
// const Button = styled.button`
//    height: 40px;
//    padding: 10px 15px 10px 15px;
//    background-color: blue;
//    color: white;
//    align-items: center;
//    border: transparent;
//    border-radius: 5px;
//    margin-top: 10px;
//    justify-content: center;
//    cursor: pointer;

//   :hover{

//   }
// `;
// const Hold = styled.div`
// gap: 20px;
  

// `;

// const Genres: React.FC= () => {
//     const [usegenres, setusegenres] = useState ("")
//     const [data, setdata] = useState ([])
    


//     useEffect (() => {
//       localStorage.setItem( 'data', JSON.stringify(data));
//     } ,[data])





//   return (
//     <Container>
//       <h3>choose your kind of movies</h3>
//     <Hold>
//     {
      
//         Genre?.map((props)=>{
//             return(
//                 <button onClick={() => {
//                     setusegenres (props)
//                 }} >{props}</button>
//             )
//         })
//      }

//     </Hold>

//     <Link   style={{
//       textDecoration: "none"
//     }}
//       to={`/Homepages`}>
//     <Button type='submit'>Continue</Button>
    
//     </Link>

//     </Container>

//   )
// }

// export default Genres






import React, {useState} from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import movies from "../../movies.json"

const Container = styled.div`
background-color: white;
min-height: 85vh;
/* position: absolute; */
/* z-index: 10; */
color: black;
padding: 0 90px;
text-align: center;
button{
  
}
`
const H2 = styled.h2``
const Butt = styled.div``
const Butt1 = styled.div`
  button{
  font-size: 20px;
  background-color: white;

  }
  
`

const Button = styled.button`
font-size: 20px;
background-color: ${(props)=> (props.active ? "#0b397a" : "white")};
color: ${(props)=> (props.active ? "white" : "black")};
gap: 40px;
border-radius: 2px;
outline: none;
border: ${(props)=> (props.active ? "1px solid #0b397a" : "1px solid black")};
padding: 10px;
margin: 4px;

`


const Genre:React.FC = () => {
    const genres = ["Action", "Adventure", "Animated", "Biography", "Comedy", "Crime", "Dance", "Disaster", "Documentary", "Drama", "Erotic", "Family", "Fantasy", "Found Footage", "Historical", "Horror", "Independent", "Legal", "Live Action", "Martial Arts", "Musical", "Mystery", "Noir", "Performance", "Political", "Romance", "Satire", "Science Fiction", "Short", "Silent", "Slasher", "Sports", "Spy", "Superhero", "Supernatural", "Suspense", "Teen", "Thriller", "War", "Western"]
    
    const [userGenre, setUserGenre] = useState<string[]>([])

    const genreClick = (genres:string) =>{
      if(userGenre.includes(genres)){
        setUserGenre(userGenre.filter((el)=>el !== genres))
      }else{
        setUserGenre([
          ...userGenre, 
          genres
        ])
      }
    
    }
    const genreActive= (genres: string) => userGenre.includes(genres)

    
  return (
    <Container>
        <H2>Select Your Genre</H2>
        <Butt>
        {genres.map((item) => 
        <Button 
        key={item} 
        active={genreActive(item)}
        onClick={()=> genreClick(item)}
        >{item}</Button>
        )}
        </Butt>
        
        <br/>
        <br/>
        
       <Butt1>
       <Link 
        style={{
            textDecoration: "none", 
        }}
        to={`/Homepage`}>
        <button>Submit</button>
        </Link>
       </Butt1>
    </Container>
  )
}

export default Genre