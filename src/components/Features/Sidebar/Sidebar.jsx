import {Link} from 'react-router-dom';
import { GlobalSetTheme } from '../ConText/ConText';
import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';
import img11 from '../../images/img11.png';
import indi from '../../images/indi.jpeg'



const Img = styled.img`
width: 60px;
height:50px;
border-radius: 15%;
margin-bottom:15px;
padding: 5px;
`


function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }


export default function Sidebar() {

const getContext = GlobalSetTheme();

const Button = styled.button`
color:${getContext.them === false?"white":"black" };
padding: 5px;
width: 50px;
font-size: 30px;
`

const LinkStyled = styled(Link)`
font-size:18px;
padding: 15px;
margin-top: 15px;
color:${getContext.them === false?"white":"black" };
text-decoration: none;
@media (max-width: 768px) {
  font-size:15px;
  }
`
const AEmail=styled.a`
text-decoration: none;
margin-bottom: 10px;
padding: 10px;
color: ${getContext.them === false?"white":"black" };
font-size: 20px;
&:hover{
  color: #1EAE98;
  
}
`
const DivStyled = styled.div`
position: fixed;
top: 0;
width: 100%;
background-color:${getContext.them === false?"black":"white" };
display: flex;
align-items: flex-start;
/* justify-content: space-between; */
align-items: center;
flex-wrap: wrap;

`
    return (
       < div>

<DivStyled className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display:"none"}}id="mySidebar">
  <Button className="w3-bar-item w3-button w3-large"
  onClick={w3_close}>Close &times;</Button>
         <div>
       <Switch
        checked={getContext.state.checkedA}
        onChange={getContext.handleChange }
        onClick={getContext.ChangeThem}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
         />
       </div>
       
    <LinkStyled className="w3-bar-item w3-button" to="/">
          <b>Home</b> 
    </LinkStyled>
    <LinkStyled className="w3-bar-item w3-button" to="/Portfolio">
            <b>Portfolio</b>
    </LinkStyled>
    <LinkStyled className="w3-bar-item w3-button" to="/Skills">
           <b>Skills</b> 
    </LinkStyled>
    <LinkStyled className="w3-bar-item w3-button" to="/ContactMe">
             <b>Contact-Me</b>
    </LinkStyled> 
    <Button  className="w3-bar-item w3-button w3-large" onClick={getContext.language==="en"?getContext.handleHebrew:getContext.handleEnglish}>{getContext.language==="en"?"עברית":"English"}</Button>
</DivStyled>

<DivStyled id="main">

<DivStyled>
  <button id="openNav" className="w3-button w3-#040505 w3-xxlarge" style={{color:"#1EAE98" , marginTop:"-25px"}} onClick={w3_open}>&#9776;</button>
  <AEmail href="https://tech-career-alternative.firebaseapp.com/">
      <Img src={img11} alt="" />
  </AEmail>
  <AEmail href="https://tech-career-alternative.firebaseapp.com/">
      <Img src={indi} alt="" />
  </AEmail>
  <AEmail href={`mailto:shuanesh1817@gmail.com`}>         
      <p>shuanesh1817@gmail.com</p>
  </AEmail>
   
</DivStyled>


</DivStyled>
</div>
    

   
    )
}
