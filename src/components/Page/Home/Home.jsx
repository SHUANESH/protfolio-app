import gifImg from '../../images/imgHome.png';
import bgcWhite from '../../images/witheBjc.png';
import bgforhome from '../../images/bgforhom.png';
import styled from 'styled-components';
import{UseContextAboutMe , GlobalSetTheme , UseContextAboutMeHebrew} from '../../Features/ConText/ConText';



const ImgStyled = styled.img`
width:100%;
height: 70%;

  animation-name: example;
  animation-duration: 5s;
margin-top: 100px;
@media (min-width: 800px) {
    width:80%;
  }

  @media (max-width: 1100px) {
    width:100%;

  }
 @keyframes example {
  from {width:50%; height: 40%; }
  to {width:100%; height: 70%;}
}
`

const AboutStyled = styled.img`
width:200px;
height: 200px;
border-radius: 6px;
transition: all 1s ease-out;
:hover {
  width:250px;
  height: 250px;
  box-shadow: -6px -4px 12px 0px rgba(127,127,127,0.75);
}
`

const H3Styled = styled.h3`
font-size: 20px;
`
const PStyled = styled.p`
margin-top:60px;
font-size: 18px;
width: 180px;
word-wrap: break-word;
@media (max-width: 1258px) {
    width:100%;
    margin-left: 50px;
  }

  @media (max-width: 708px) {
   flex-direction: row;
   margin-left: 13px;
   width: 100%;

  }

`

const ContinuerDivImg = styled.div`
display:flex;
justify-content: center;
align-items: flex-start;
justify-content: center;
flex-direction: row;
width: 60%;
margin-top: -10px;
padding: 20px;
@media (max-width: 700px) {
    flex-direction: column;

  }

  @media (min-width:1250px) {
    flex-direction: column;
    width: 30%;
  }


`
const DivForContinuerFlexImages = styled.div`
display:flex;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
text-align: center;
width: 100%;
margin: 10px;
@media (min-width:1250px) {
    flex-direction: row;
  }

  @media (min-width: 800px) {
    width:100%;

  }


`
export default function Home() {
  const themChe = GlobalSetTheme();
  const ArrayOfAboutMe = UseContextAboutMe();

  const ContinuerDiv = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -50px;
  @media (max-width:720px) {
      width:100%;
      
    }

    /* background-image: url(${themChe.them === false? gifImg: bgforhome});
    background-size: cover; */
  `


    return (
         <ContinuerDiv>
            <ImgStyled  src={themChe.them === false? gifImg: bgcWhite} alt="" className="animate__animated animate__zoomIn"/>
             <DivForContinuerFlexImages>
            {
                ArrayOfAboutMe.map((info , index)=>{
                    return <ContinuerDivImg key={index} className="animate__animated animate__zoomIn">
                              <div>
                                  <H3Styled>{info.headline}</H3Styled>
                                  <h5>{info.date}</h5>
                                  <AboutStyled src={info.img}/>
                              </div>
                              <div>
                                  <PStyled>{info.paragraph}</PStyled>
                              </div>
                           </ContinuerDivImg>
                })
            }
            </DivForContinuerFlexImages>
        </ContinuerDiv>
    )
}

export function HomeHe() {
    const themChe = GlobalSetTheme();
    const ArrayOfAboutMe = UseContextAboutMeHebrew();
    return (
         <ContinuerDiv >
            <ImgStyled  src={themChe.them === false? gifImg: bgcWhite} alt="" className="animate__animated animate__zoomIn"/>
             <DivForContinuerFlexImages>
            {
                ArrayOfAboutMe.map((info , index)=>{
                    return <ContinuerDivImg key={index} className="animate__animated animate__zoomIn">
                              <div>
                                  <H3Styled>{info.headline}</H3Styled>
                                  <h5>{info.date}</h5>
                                  <AboutStyled src={info.img}/>
                              </div>
                              <div>
                                  <PStyled>{info.paragraph}</PStyled>
                              </div>
                           </ContinuerDivImg>
                })
            }
            </DivForContinuerFlexImages>
        </ContinuerDiv>
    )
}