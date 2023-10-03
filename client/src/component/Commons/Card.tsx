import React from 'react'
import styled from '@emotion/styled'
import data from "../../movies.json"
import { Link } from 'react-router-dom';


const CardHold = styled.div`
     display: flex;
     align-items: center;
     flex-wrap: wrap;
     justify-content: center;
`;
const Maincard = styled.div`
     min-width: 200px;
      margin: 10px;
   flex: 1; 

`;
const CardImage = styled.img`
    height: 300px;
    width: 100%;
`;
const Title = styled.div`
width: 100%;
height: 40px;
`;

const Card:React.FC = () => {
  return (
    <CardHold>
        {data?.map((props) =>(
            <Maincard>
                <CardImage src= {props?.poster_url} />
                <Link to = {`/Detailpages/${props.title}/${props.id} `}>
                <Title> {props?.title}</Title>
                </Link>
            </Maincard>
        ))}
    </CardHold>
  )
}

export default Card