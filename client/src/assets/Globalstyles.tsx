import {Global, css} from "@emotion/react"

const Globalstyles = () => {
    return(
        <Global  styles=   {css`
            @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,800;0,900;0,1000;1,200;1,300;1,400;1,800;1,900;1,1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap');
            
            body{
                background-color: #1f1f1f;
                min-height: 100vh;
                margin: 0;
                padding: 0;
                font-family: 'Mulish', sans-serif;
                color: #fff;
            }
        `} />
    )
}
export default Globalstyles