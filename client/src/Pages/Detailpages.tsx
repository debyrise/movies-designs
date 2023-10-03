import React, {useState, useEffect} from 'react'
import styled from "@emotion/styled"
// import pic from "../assets/assets/sli4.jpg"
import {IoMdNotifications} from 'react-icons/io'
import {BsFilePlayFill} from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import movies from "../movies.json"
import { Rating } from "react-simple-star-rating"
import Modal from '../component/Modal'

const Container = styled.div`
     padding-bottom: 100px;
`;

const MainHero = styled.div < { bgim:string | undefined  }>`
min-height:500px;
width: 100%;
background-color: white;
background-image:url(${(props) => props?.bgim}) ;
background-position:center;
background-size: cover;
position: relative;
display: flex;
justify-content: center;
align-items: center;

`;
const Transparentbackground = styled.div`
    position: absolute;
    /* background: rgb(63,94,251); */
background: radial-gradient(circle, rgba(0,0,0, 0.420) 46%, rgba(114,49,201,1) 92%, rgba(0, 0,0,1) 97%);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const TypeHead = styled.div`
     font-size: 20px;
     margin-top: 100px;
     font-weight: 500;
`;

const ContHold = styled.div`
    color: white;
    z-index: 10;
    text-align: center;
`;

const Tittle = styled.div`
      font-size: 60px;
      margin-top: 10px;
      font-weight: bolder;

`;

const Button = styled.button < {bgg:string, cl:string}  >`
      padding: 10px 15px 10px 15px;
      background-color: ${(props) => props.bgg};
      color: ${(props)=> props.cl};
      border: none;
      outline: none;
      border-radius: 5px;
      margin-right: 5px;
      cursor: pointer;
      font-size: 17px;
      font-weight: bold;
      transition: all 350s;
      border: 1px solid silver;


      :hover{
        background-color: transparent;
        color: white;
      }
`;

const Icon = styled.div`
  margin-right: 10px;
`;

const Main = styled.div`
     display: flex;
`;

const Posterimage = styled.img`
      height: 300px;
      width: 350px;
      background-color: white;
      object-fit: cover;
`;

const Hold = styled.div`
       display: flex;
       gap: 50px;
       justify-content: center;
       margin-top: 100px;

`;

const Second = styled.div`
    color: white;
`;
const H1 = styled.div`
     font-size: 17px;
     font-weight: bold;
`;

const Sub = styled.div`
       font-size: 13px;
       margin-bottom: 10px;

`;
const P = styled.div`
       font-size: 20px;
       width: 500px;
`;

// const Span = styled.div``;
// const Rating = styled.div``;


const Detailpages:React.FC = () => {

  const { id } = useParams();

  const Detaildata = movies.find((el) => el.id === Number(id));
         console.log(Detaildata)

         const [show, setshow] = useState(false);

         const togglestate = () => {
          setshow(!show)
         }

         useEffect (() => {
          if (show)
           {
            document.body.style.overflow = "hidden"
          }else{
            document.body.style.overflow = "unset";
          }
         }, [show] );
        
  return (
    <Container>
      <MainHero bgim={Detaildata?. backgroundImg}>
        <Transparentbackground></Transparentbackground>
        <ContHold>
          <TypeHead>DEEMOVIES</TypeHead>

          <Tittle>
               {Detaildata?.title}  {Detaildata?.year}
          </Tittle>

          <P> {Detaildata?.plot} </P>
          <Button cl = 'black' bgg= ' white'>
             <Main>
                <Icon>
                    <  IoMdNotifications/>
               </Icon>
               <span> subscribe</span>
              </Main>
           </Button>
           <Button cl = 'black' bgg= ' white'>
             <Main onClick={togglestate} >
                <Icon>
                   <  BsFilePlayFill />
               </Icon>
               <span> Watch Triler </span>
              </Main>
           </Button>
        </ContHold>
      </MainHero>
      <Hold>
        <Posterimage  src= {Detaildata?.poster_url}  />
        <Second>
					<H1>Title</H1>
					<Sub>{Detaildata?.title}</Sub>
					<H1>plot</H1>
					<P>{Detaildata?.plot}</P>
					<br />
					<H1>Actors</H1>

					<Sub>
						{Detaildata?.actors?.map((props) => (
							<>
								<span>{props}</span>
								<br />
							</>
						))}
					</Sub>
					<br />
					<H1>Writers</H1>
					<Sub>
						{Detaildata?.writers?.map((props) => (
							<>
								<span>{props}</span>
								<br />
							</>
						))}
					</Sub>
					<br />
					<H1>rating</H1>
					<Sub>{Detaildata?.rating}</Sub>
					<Rating
						size={10}
						style={{
							fontSize: "14px",
						}}
						initialValue={Detaildata!.rating % 5}
					/>
				</Second>
      </Hold>
      {show ? < Modal video =  {Detaildata?.trailer_url}  togglestate = {togglestate}  /> : null }
    </Container>
  )
}

export default Detailpages