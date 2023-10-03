import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'


import bg1 from '../assets/assets/sli1.jpg'
import bg2 from '../assets/assets/sli4.jpg'
import bg3 from '../assets/assets/sli3.png'
import bg4 from '../assets/assets/sli4.jpg'

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import styled from '@emotion/styled'




const Container = styled(Swiper)`
    min-height: 500px;
    width: 100%;
    margin-top: 70px;

    color: white;
`;

const SwipingSlide = styled(SwiperSlide)<{bg:string}>`
     height: 500px;
     width: 100%;

     background-image: url(${(props) => props.bg});
     background-position: center;
     background-size: cover;
     background-repeat: no-repeat;
     position: relative;
`;

const Transparentbackground = styled.div`
      /* background: linear-gradient(90deg, rgba(0,0,0,1) 22%, 
      rgba(9,9,121,1) 33%, 
      rgba(0,212,255,1) 100%); */
      background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 19%, rgba(255,255,255,0) 70%);

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding-left:50px;

`;

const Typehead = styled.div`
    font-size: 20px;
    margin-top: 100px;
    font-weight: 500;
`;
const Title = styled.div`
    font-size: 60px;
    margin-top: 10px;
    font-weight: bolder;
`;

const Para = styled.div`
    width: 600px;
    font-size: 17px;
    margin-bottom: 40px;

`;

const Button = styled.button<{bgg:string; cl:string}>`
     padding: 10px 15px 10px 15px;
     background-color: ${(props)=> props.bgg};
     color: ${(props)=> props.cl};
     border:none;
     outline: none;
     margin-right: 15px;
     border-radius: 5px;
     cursor: pointer;

`;

const Hero :React.FC = () => {
  return (
    <>
    <Container
      spaceBetween={30}
      centeredSlides = {true}
      autoplay= {{
        delay: 2500,
        disableOnInteraction: false,}}
        modules={[Pagination, Navigation, Autoplay]}
        className='myswiper'>
             
             <SwipingSlide bg={bg1}>
             
                <Transparentbackground>
                    <Typehead> DEEMOVIES</Typehead>
                    <Title>LATEST 2023MOVIES</Title>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam, debitis unde nostrum accusantium quos adipisci amet voluptatem necessitatibus. Magnam quod ad accusantium assumenda, possimus odio, ab dolor mollitia tempora facilis a fugiat doloremque! Consectetur doloremque eveniet porro rerum repellendus?</Para>
                    <Button  cl= 'white' bgg= '#0b397a'>Get Started</Button>
                    <Button cl= 'black' bgg= '' >Watch movies</Button>
                   
                    </Transparentbackground>
                    
             </SwipingSlide>


             <SwipingSlide bg={bg2}>
            
                <Transparentbackground>
                    <Typehead> DEEMOVIES</Typehead>
                    <Title>LATEST 2023MOVIES</Title>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam, debitis unde nostrum accusantium quos adipisci amet voluptatem necessitatibus. Magnam quod ad accusantium assumenda, possimus odio, ab dolor mollitia tempora facilis a fugiat doloremque! Consectetur doloremque eveniet porro rerum repellendus?</Para>
                    <Button  cl= 'white' bgg= '#0b397a'>Get Started</Button>
                    <Button cl= 'black' bgg= '' >Watch movies</Button>

                    
                    
                    </Transparentbackground>

                    
             </SwipingSlide>

             {/* <SwipingSlide bg={bg2}>
                <Transparentbackground>
                    <Typehead> K10MOVIES</Typehead>
                    <Title>LATEST 2023MOVIES</Title>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam, debitis unde nostrum accusantium quos adipisci amet voluptatem necessitatibus. Magnam quod ad accusantium assumenda, possimus odio, ab dolor mollitia tempora facilis a fugiat doloremque! Consectetur doloremque eveniet porro rerum repellendus?</Para>
                    <Button  cl= 'white' bgg= '#0b397a'>Get Started</Button>
                    <Button cl= 'black' bgg= '' >Watch movies</Button>

                    </Transparentbackground>
             </SwipingSlide>
 */}

             <SwipingSlide bg={bg3}>
           
                <Transparentbackground>
                    <Typehead> DEEMOVIES</Typehead>
                    <Title>LATEST 2023MOVIES</Title>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam, debitis unde nostrum accusantium quos adipisci amet voluptatem necessitatibus. Magnam quod ad accusantium assumenda, possimus odio, ab dolor mollitia tempora facilis a fugiat doloremque! Consectetur doloremque eveniet porro rerum repellendus?</Para>
                    <Button  cl= 'white' bgg= '#0b397a'>Get Started</Button>
                    <Button cl= 'black' bgg= '' >Watch movies</Button>

                    </Transparentbackground>
                    
                
             </SwipingSlide>

             <SwipingSlide bg={bg4}>
                 
                <Transparentbackground>
                   
                    
                    <Typehead> DEEMOVIES</Typehead>
                    <Title>LATEST 2023MOVIES</Title>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam, debitis unde nostrum accusantium quos adipisci amet voluptatem necessitatibus. Magnam quod ad accusantium assumenda, possimus odio, ab dolor mollitia tempora facilis a fugiat doloremque! Consectetur doloremque eveniet porro rerum repellendus?</Para>
                    <Button  cl= 'white' bgg= '#0b397a'>Get Started</Button>
                    <Button cl= 'black' bgg= '' >Watch movies</Button>

                    </Transparentbackground>
                
                    
             </SwipingSlide>
             




             
    </Container>

    
    </>
  )
}

export default Hero