import {UseContextForSkills , GlobalSetTheme , UseContextAboutMe ,UseContextAboutMeHebrew} from '../../Features/ConText/ConText';
import styled from 'styled-components';
import blueDark from '../../images/blue.jpg';
import withBlue from '../../images/withBlue.jpg';
import Carousel from 'react-bootstrap/Carousel';



const CarousalDiv = styled.div`
height: 50vh;
width: 60vw;
margin-top: 50px;
margin-bottom: 200px;
`
const SpanStyled = styled.span`
height: 70px;
width: 70px;
border-radius: 15px;
font-size: 50px;

;

@media (min-width: 1028px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 700px) {
    height: 50px;
    width: 50px;
  }
`

const DivContainerForData = styled.div`
height: 15vh;
width: 15vw;
margin: 5px;
padding: 30px;
text-align: center;

`

const PStyled = styled.p`
font-size: 15px;
color: white;
text-align: center;
background-color: #061220;
border-radius: 2px;
@media (max-width: 700px) {
    font-size: 12px;
    width: 50px;
  }
`
export default function Skills() {
const ArrayOfSkillsLogo = UseContextForSkills();
const themChe = GlobalSetTheme();

const Continuer = styled.div`
background-image: url(${themChe.them === false? blueDark: withBlue});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: fit-content;
width: fit-content;

`
const SkillsDiv = styled.div`
width:80%;
height: 100vh;
margin-top: 20px;
border-radius: 10px;
display: flex;
justify-content:space-around;
flex-wrap: wrap;
flex-direction: row;
background-image:"transparent";
background-size: cover;
@media (max-width: 800px) {
    width: 60%;
  }
`
const H1 = styled.h1`
color:${themChe.them === false? "white": "black"};
font-Size:70px;
margin-top: 80px;
text-align: center;
@media (max-width: 800px) {
    font-Size:40px;
    margin-top: 120px;
  }
`
const H5 = styled.h5`
color:${themChe.them === false? "white": "black"};
text-align: center;
font-Size:20px;
@media (max-width: 800px) {
    font-Size:10px;
  }
`
const DivUl = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100vw;
height: 35vh;
@media (max-width: 800px) {
flex-wrap: wrap;
flex-direction: column;
height: 500px;
}

`
const CarouselImg = styled.img`
width: 200px;
height: 500px;
border-radius: 8px;

`
const Ul = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
background-color:white;
width: 210px;
height: 150px;
border-radius: 2px;
list-style: none;
box-shadow: -5px 7px 10px 0px rgba(35,28,28,0.75);
@media (max-width: 800px) {
flex-wrap: wrap;
flex-direction: row;
height: 100px;
}
@media (min-width: 1000px) {
width: 350px;
}
&>li{
  width: 250px;
  font-size: 18px;
  color: ${themChe.them === false? "black": "black"};
}
`

const ImgArrayForCarousels= UseContextAboutMe()
    return (
        <Continuer>
            <div>
                <H1><b>skills </b></H1>
                <H5>"Every morning I get up I believe I will learn something new today"</H5>
                {/* <H5><b>"Success is the ability to move from failure to failure without losing enthusiasm" <br/> -Winston Churchill- </b></H5> */}
            </div>
                <h2 style={{marginTop:"50px" , textAlign:"center"}}>Professional skills <br />Client side and server side </h2>
               <SkillsDiv>
                  
                   {
                       
                       ArrayOfSkillsLogo.map((getItem , index)=>{
                          return  <DivContainerForData key={index}>
                                        <PStyled>{getItem.headline}</PStyled>
                                        <SpanStyled  className="animate__animated animate__fadeInDown">{getItem.img}</SpanStyled>
                                   </DivContainerForData>
                       })
                         
                   }

               </SkillsDiv>
               <h2 style={{marginTop:"10%"}}>Personal skills</h2>
               <DivUl>
                 <div>
                 <Ul>
                   <li>Responsibility</li>
                   <li>Team-working</li>
                   <li>Intrinsically Motivated</li>
                 </Ul>
                 </div>
                  <div>
                  <Ul>
                   <li>Interpersonal Skills</li>
                   <li>Flexible/Dependable</li>
                   <li>Critical Thinking</li>
                 </Ul>
                 </div>
                 <div>
                 <Ul>
                   <li>Organization Skills</li>
                   <li>Creativity</li>
                   <li>Emotional Intelligence</li>
                 </Ul>
                  </div>
                  
               </DivUl>
               
               <CarousalDiv>
                    <Carousel>

                    {
                       ImgArrayForCarousels.map((info , index)=>{
                           return <Carousel.Item key={index}>
                                       <CarouselImg  className="d-block w-100 h-200" src={info.img} alt="First slide"/>
                                       <Carousel.Caption>
                                           <h3>{info.headline}</h3>
                                        </Carousel.Caption>
                                </Carousel.Item>
                     })
                     }
                      
                    </Carousel> 
               </CarousalDiv>
        </Continuer>
    )
}


export  function SkillsHe() {
  const ArrayOfSkillsLogo = UseContextForSkills();
  const themChe = GlobalSetTheme();
  
  const Continuer = styled.div`
  background-image: url(${themChe.them === false? blueDark: withBlue});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  
  `
  const SkillsDiv = styled.div`
  width:80%;
  height: 100vh;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  justify-content:space-around;
  flex-wrap: wrap;
  flex-direction: row;
  background-image:"transparent";
  background-size: cover;
  @media (max-width: 800px) {
      width: 60%;
    }
  `
  const H1 = styled.h1`
  color:${themChe.them === false? "white": "black"};
  font-Size:60px;
  margin-top: 80px;
  text-align: center;
  @media (max-width: 800px) {
      font-Size:40px;
      margin-top: 120px;
    }
  `
  const H5 = styled.h5`
  color:${themChe.them === false? "white": "black"};
  text-align: center;
  font-Size:20px;
  @media (max-width: 800px) {
      font-Size:10px;
    }
  `
  const DivUl = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 35vh;
  @media (max-width: 800px) {
  flex-wrap: wrap;
  flex-direction: column;
  height: 500px;
  }
  
  `
  const CarouselImg = styled.img`
  width: 200px;
  height: 500px;
 border-radius: 8px;

  `
  const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:white;
  list-style: none;
  width: 280px;
  height: 160px;
  border-radius: 2px;
  box-shadow: -5px 7px 10px 0px rgba(35,28,28,0.75);

  @media (max-width: 800px) {
  flex-wrap: wrap;
  flex-direction: row;
  height: 100px;
  }
  @media (min-width: 1000px) {
  width: 350px;
  }
  &>li{
    width: 250px;
    font-size: 18px;
    color: ${themChe.them === false? "black": "black"};
  }
  `
  const ImgArrayForCarousels= UseContextAboutMeHebrew()
      return (
          <Continuer>
              <div>
                  <H1><b>כישורים</b></H1>
                  <H5>"כל בוקר שאני קמה אני מאמינה שאני אלמד משהו חדש"</H5>
                  {/* <H5><b>"Success is the ability to move from failure to failure without losing enthusiasm" <br/> -Winston Churchill- </b></H5> */}
              </div>
                  <h2 style={{marginTop:"50px" , textAlign:"center"}}>  כישורים מקצועיים <br/>צד לקוח וצד שרת</h2>
                 <SkillsDiv>
                    
                     {
                         
                         ArrayOfSkillsLogo.map((getItem , index)=>{
                            return  <DivContainerForData key={index}>
                                          <PStyled>{getItem.headline}</PStyled>
                                          <SpanStyled  className="animate__animated animate__fadeInDown">{getItem.img}</SpanStyled>
                                     </DivContainerForData>
                         })
                           
                     }
  
                 </SkillsDiv>
                 <h2 style={{marginTop:"10%"}}>כישורים אישיים</h2>
                 <DivUl>
                   <div>
                   <Ul>
                     <li>אחראית</li>
                     <li>עבודה עם צוות</li>
                     <li>מוטיבציה גבוהה</li>
                   </Ul>
                   </div>
                    <div>
                    <Ul>
                     <li>כישורים בין אישיים</li>
                     <li>אמינה/גמישה</li>
                     <li>חשיבה ביקורתית</li>
                   </Ul>
                   </div>
                   <div>
                   <Ul>
                     <li>כישורים ארגונים</li>
                     <li>יצירתית</li>
                     <li>בעלת אינטלגציה רגשית</li>
                   </Ul>
                    </div>
                    
                 </DivUl>
                 <CarousalDiv>
                    <Carousel>

                    {
                       ImgArrayForCarousels.map((info , index)=>{
                           return <Carousel.Item key={index}>
                                       <CarouselImg  className="d-block w-100 h-200" src={info.img} alt="First slide"/>
                                       <Carousel.Caption>
                                           <h3>{info.headline}</h3>
                                        </Carousel.Caption>
                                </Carousel.Item>
                     })
                     }
                      
                    </Carousel> 
               </CarousalDiv>
         
          </Continuer>
      )
  }
