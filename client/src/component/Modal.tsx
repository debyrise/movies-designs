import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      z-index: 10;

`;
const Modalcard = styled.div`
     height: 80vh;
     width: 70%;
`;

interface Iprops {
    video :string | undefined;
    togglestate: () => void;
}


const Modal: React.FC<Iprops> = ({video, togglestate}) => {
    console.log(video)
  return (
    <Container>
         <Modalcard onPlay={true}  src = {video} />
         <button  onClick={togglestate} > cancel </button>
    </Container>
  );
};

export default Modal