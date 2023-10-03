import styled from '@emotion/styled'
import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
const Container = styled.div`
    height: 70px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
    background-color: black;
    overflow: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;
const Logo =styled.div`
    margin-left: 40px;
    font-size: 30px;
    font-weight: bolder;
`;
const InputHold = styled.div`
    width: 70px;
    height: 20px;
    background-color: white;
    border: 1px solid white;
    align-items: center;
    color: black;
    padding: 10px;
    border-radius: 5px;
    transition: all 300ms;
    margin-right: 20px;
    display: flex;

    :hover{
        width: 300px;
    }
`;
const Second = styled.div`
  margin-right: 40px;
  display: flex;
  color: white;
  align-items: center;

`;
const Iconsearch = styled.div`
     font-size: 25px;



`;
const Input = styled.input`
       background-color: transparent;
       flex: 1;
       outline: none;
       border: none;
       height: 100%;
       overflow: hidden;
`;
const UserHold = styled.div`
     font-size: 20px;

`;

const Header:React.FC = () => {
  return (
    <Container>
           <Logo> DEEMOVIES</Logo>
           <Second>
              <InputHold>
                  <Iconsearch>
                    < AiOutlineSearch />
                  </Iconsearch>
                  <Input placeholder='search...' />
             </InputHold>
             <UserHold>
                {}
             </UserHold>
           </Second>
          


    </Container>
   

  )
}

export default Header