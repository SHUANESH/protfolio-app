import { UseContText,UseContTextHebrew } from '../../Features/ConText/ConText';
import styled from 'styled-components';

const ImgStyled = styled.img`
width:190px;
height: 200px;
border-radius: 12px;
box-shadow: -5px 7px 10px 0px rgba(35,28,28,0.75);
@media (max-width: 768px) {
width:170px;
height: 140px;
  }
  transition:all 1s ease-out;
&:hover{
  width: 210px;
  height: 220px;
  padding: 5px;

}

`

const DivStyled = styled.div`
padding: 20px;
margin: 30px;
width: 300px;
height: 50%;
border-radius: 10px;


@media (max-width: 768px) {
width:250px;
height: 500px;
  }
`
const H5Styled = styled.h5`
margin-top: 15px;
margin-bottom: 15px;

`

const PStyled = styled.p`
margin-top: 15px;
margin-bottom: 15px;

`

const DivContinuer = styled.div`
width: 100%;
height: 40%;
margin-top: 90px;
display:  flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-direction: row;

`;

export default function Portfolio() {
  const ProjectArray = UseContText();

  return (
    <DivContinuer>
      {
    ProjectArray.map((info , index)=>{
        return <div key={index}>
                 <DivStyled className="animate__animated animate__fadeInDown">
                 <ImgStyled src={info.img}  alt="img"></ImgStyled>
                <H5Styled >{ info.headline}</H5Styled>
                <PStyled >{info.paragraph}</PStyled>
             <a href={info.link} class="btn btn-dark">Link to git </a>
          </DivStyled>
       </div>
    })        
      } 
    </DivContinuer>

  
  );
}

export  function PortfolioHe() {
  const ProjectArray = UseContTextHebrew();

  return (
    <DivContinuer>
      {
    ProjectArray.map((info , index)=>{
        return <div key={index}>
                 <DivStyled className="animate__animated animate__fadeInDown">
                 <ImgStyled src={info.img}  alt="img"></ImgStyled>
                <H5Styled >{ info.headline}</H5Styled>
                <PStyled >{info.paragraph}</PStyled>
             <a href={info.link} class="btn btn-dark">Link to git </a>
          </DivStyled>
       </div>
    })        
      } 
    </DivContinuer>

  
  );
}