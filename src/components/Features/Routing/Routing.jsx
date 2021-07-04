import Home ,{HomeHe} from '../../Page/Home/Home';
import Portfolio,{PortfolioHe} from '../../Page/Portfolio/Portfolio';
import Skills ,{SkillsHe} from '../../Page/Skills/Skills';
import ContactMe from '../../Page/ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useState , useReducer } from 'react';
import {ContextThemeProvider} from '../ConText/ConText'
import {BrowserRouter as Router,  Switch, Route , Link } from 'react-router-dom';




export default function Routing() {
   const [state, setState] = useState({
      checkedA: true,
      checkedB: true,
    });
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    const [them, setThem] = useState(false)
    const ChangeThem = ()=>{
      them === false? setThem(true): setThem(false);
    }

const initialState = "en";
const languageReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state ,action.lan ;
    case "DECREASE":
      return state ,action.lan;
    default:
      throw new Error();
  }
};

const handleEnglish = () => {
   dispatch({ type: "INCREASE", lan: "en" });
 };

const handleHebrew = () => {
   dispatch({ type: "DECREASE", lan: "he" });
 };

const [language, dispatch] = useReducer(languageReducer, initialState);

    return (
        <div style={{backgroundColor: them === false?"black":"white" , color: them === false?"white":"black"}}>
        <ContextThemeProvider value={{state ,handleChange ,them, ChangeThem , handleEnglish , handleHebrew , language}}>
        <Header/>
         <Switch>
         <Route exact path="/">
             {language ==="en"? <Home/> :<HomeHe/>}
         </Route>

         <Route path="/Portfolio">
         {language ==="en"? <Portfolio/> :<PortfolioHe/>}
         </Route>

         <Route path="/Skills">
         {language ==="en"? <Skills/> :<SkillsHe/>}
         </Route>

         <Route path="/ContactMe">
            <ContactMe/>
         </Route>
        </Switch>
        <Footer/>
        </ContextThemeProvider>
        </div>
    )
}
