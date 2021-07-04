import  {useState , useEffect , useRef} from 'react';
import styled from 'styled-components';
import{GlobalSetTheme} from '../../Features/ConText/ConText';
import emailjs from 'emailjs-com';


const EMAIL_KEY = process.env.REACT_APP_EMAIL_KEY;
const EMAIL_SERVICE_KEY = process.env.REACT_APP_EMAIL_SERVICE_KEY;
const TEMPLATE_KEY = process.env.REACT_APP_TEMPLATE_KEY
function sendEmail(e) {
    emailjs.sendForm(`${EMAIL_SERVICE_KEY}`, `${TEMPLATE_KEY}`, e.target, `${EMAIL_KEY}`)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();

  }

const Continuer = styled.div`
margin-top: 20px;
align-items: center;
display: flex;
padding: 20px;
flex-wrap: wrap;
flex-direction: column;


`
const From = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
width: 100%;
height:100%;
padding: 10px;
margin-top: 50px;
box-shadow: 0px 4px 8px 0px #C9E4C5;

`
const Input = styled.input`
font-size: 15px;
padding: 5px;
margin: 10px;
border-top:solid 0px black;
border-left:solid 0px black;
border-right:solid 0px black;
border-bottom:solid 1px black;

&:focus{
       background-color: #8df7f7;
       font-size: 13px;
       border: solid 0px;
}
&:hover{
       background-color: #abeecf;
       border: solid 0px;
    }
`

const Textarea = styled.textarea`
padding: 10px;
margin-top: 10px;
width: 250px;
border: solid 0px;

`
const AStyled = styled.a`
    text-decoration: none;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 20px;
    width: 20vw;
    height: 5vh;
    margin-top: 15px;
    border-radius: 5px;
    cursor:pointer;
  
`

const ButtonStyled = styled.button`
    text-decoration: none;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 20px;
    width: 20vw;
    margin-top: 20px;
    height: 5vh;
    border-radius: 5px;
    border: solid 0px;
    cursor:pointer;
  
`
const HedLinDiv = styled.div`
text-align: center;
margin-top: 100px;
color: wheat;
`

const Span = styled.span`
padding: 10px;
margin-top: 10px;
margin-bottom: 10px;
font-size: 18px;
color: #1a2077;
/* display: inline-block; */


`
export default function InputComponent() {
    const inputEl = useRef()
    const [textSpan, setTextSpan] = useState("")
    const themChe = GlobalSetTheme();
    const [inputValue, setInputValue] = useState({})
    function ValueChang(e) {
       setInputValue({...inputValue ,[e.target.name]: e.target.value });
       console.log(inputValue);
   }

   useEffect(() => {
    inputEl.current.focus();
}, []);
   const [allMessage, setAllMessage] = useState();
   useEffect(() => {
       setAllMessage(`
       Firs name: ${inputValue.Name}
       Last name: ${inputValue.Last}
       Phone number: ${inputValue.Phone}
       Email: ${inputValue.Email}
       Message: ${inputValue.message}`);
   }, [inputValue])

    return (
        <Continuer>
                

             
            <form onSubmit={sendEmail} >
            <HedLinDiv style={{ color:themChe.them === false?"white":"black"}}>
              <h2>Contact me</h2>
              <h5>I would love to hear from you!</h5>
            </HedLinDiv>
            <From style={{backgroundColor:themChe.them === false?"#a8a7a4ab":"white", color:themChe.them === false?"black":"black"}}>

            <label htmlFor="">First Name:</label>
            <Input type="text" name="Name" ref={inputEl} value={inputValue.Name} required onChange={ValueChang}/>

            <label htmlFor="">Last Name:</label>
            <Input type="text" name="Last" value={inputValue.Last} required onChange={ValueChang}/>

            <label htmlFor="">Phone:</label>
            <Input type="phone" name="Phone" value={inputValue.Phone} required onChange={ValueChang}/>

            <label htmlFor="">Email:</label>
            <Input type="email" name="Email" value={inputValue.Email} required onChange={ValueChang}/>
            <Textarea name="message" value={inputValue.message} placeholder="Write your message..." required onChange={ValueChang} onBlur={()=>{textSpan === ""?setTextSpan("Thank you I will contact you as soon as possible!") : setTextSpan("")}}>
               
            </Textarea>

           {/* <AStyled  style={{backgroundColor:themChe.them === false?"white":"black" , color:themChe.them === false?"black":"white"}} id="aId" href={`mailto:shuanesh1817@gmail.com?subject=Big%20News&body=${allMessage}`} onClick={()=>{textSpan === ""?setTextSpan("Thank you I will contact you as soon as possible!") : setTextSpan("")}}>Send</AStyled> */}
           <ButtonStyled type="submit" style={{backgroundColor:themChe.them === false?"white":"black" , color:themChe.them === false?"black":"white"}}>Send</ButtonStyled>
            <Span >
               {textSpan}
            </Span>
            <AStyled style={{backgroundColor:themChe.them === false?"white":"black" , color:themChe.them === false?"black":"white"}} id="aId" onClick={()=>{inputEl.current.focus()}}>Go-Up</AStyled>

            {/* <button type="submit" onClick={()=>{alert(`mailto:shuanesh1817@gmail.com?subject=Big%20News&body=${allMessage}`);}}>submit</button> */}

            </From>
            </form>            
            </Continuer>


    )
}


export function InputComponentHe() {
    const inputEl = useRef();
    const textShow = useRef();
    const [textSpan, setTextSpan] = useState("")
    const themChe = GlobalSetTheme();
    const [inputValue, setInputValue] = useState({})
    function ValueChang(e) {
       setInputValue({...inputValue ,[e.target.name]: e.target.value });
       console.log(inputValue);
   }
    useEffect(() => {
        inputEl.current.focus();
    }, []);

   const [allMessage, setAllMessage] = useState();
   useEffect(() => {
       setAllMessage(`
       Firs name: ${inputValue.Name}
       Last name: ${inputValue.Last}
       Phone number: ${inputValue.Phone}
       Email: ${inputValue.Email}
       Message: ${inputValue.message}`);
   }, [inputValue])

    return (
        <Continuer>
              
            <form onSubmit={sendEmail} >
            <HedLinDiv style={{ color:themChe.them === false?"white":"black"}}>
              <h2 >יצירת קשר</h2>
              <h5>!אני אשמח לשמוע מכם</h5>
            </HedLinDiv>
            <From style={{backgroundColor:themChe.them === false?"#E6DDC6":"white", color:themChe.them === false?"black":"black"}}>

            <label htmlFor="">:שם פרטי</label>
            <Input type="text" name="Name" ref={inputEl} value={inputValue.Name} required onChange={ValueChang}/>

            <label htmlFor="">:שם משפחה</label>
            <Input type="text" name="Last" value={inputValue.Last} required onChange={ValueChang}/>

            <label htmlFor="">:מספר פלאפון</label>
            <Input type="phone" name="Phone" value={inputValue.Phone} required onChange={ValueChang}/>

            <label htmlFor="">:אימייל</label>
            <Input type="email" name="Email" value={inputValue.Email} required onChange={ValueChang}/>
            <Textarea ref={textShow}  name="message" value={inputValue.message} placeholder="Write your message..." required onChange={ValueChang}  onBlur={()=>{textSpan === ""?setTextSpan("תודה אני אצור איתכם קשר בהקדם") : setTextSpan("")}}>
               
            </Textarea>

           {/* <AStyled  style={{backgroundColor:themChe.them === false?"white":"black" , color:themChe.them === false?"black":"white"}} id="aId" href={`mailto:shuanesh1817@gmail.com?subject=Big%20News&body=${allMessage}`} onClick={()=>{textSpan === ""?setTextSpan("Thank you I will contact you as soon as possible!") : setTextSpan("")}}>Send</AStyled> */}
           <ButtonStyled type="submit" style={{backgroundColor:themChe.them === false?"white":"black" , color:themChe.them === false?"black":"white"}} >שלח</ButtonStyled>
            <Span>
               {textSpan}
            </Span>
            <AStyled style={{backgroundColor:themChe.them === false?"white":"black" , color:themChe.them === false?"black":"white"}} id="aId" onClick={()=>{inputEl.current.focus()}}>עלה למעלה</AStyled>

            {/* <button type="submit" onClick={()=>{alert(`mailto:shuanesh1817@gmail.com?subject=Big%20News&body=${allMessage}`);}}>submit</button> */}
    
            </From>
            </form>

            </Continuer>


    )
}
