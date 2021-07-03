import { useContext , createContext } from "react";

import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import img6 from '../../images/img6.png';
import img7 from '../../images/img7.png';
import img8 from '../../images/img8.png';
import img9 from '../../images/img9.png';
import img10 from '../../images/img10.png';
import git from '../../images/git.png'

import htmlLogo from '../../images/html-logo.png';
import cssLogo from '../../images/cssLogo.png';
import reactLogo from '../../images/react-logo.png';
import jsLogo from '../../images/js-logo.png';
import CLogo from '../../images/c#-logo.png';
import bootLogo from '../../images/boot-logo.png';
import jqLogo from '../../images/jq-logo-2.jpg';
import mongoLogo from '../../images/mongo-logo.jpg';
import mvsLogo from '../../images/mvs-logo.jpg';
import nodeLogo from '../../images/node-logo.png';
import sqlLogo from '../../images/sql-logo.jpg';
import AboutMe1 from '../../images/AboutMe.jpeg';
import AboutMe2 from '../../images/AboutMe-2.jpeg';

import ranAndMe from '../../images/ranAndMe.jpeg';
import firstCors from '../../images/firstCors.jpeg'
import timeP from '../../images/timeP.jpeg'


// Portfolio context in English
const ProjectArray =[

    {headline:"Movie website",img:img7 ,paragraph:"Website made of movies made with an external server using JS, and working with API. With the option to search movies from the list" ,link:"https://shuanesh.github.io/External_server/" },
    {headline:"Pet shop website",img:img10 ,paragraph:"A website for a pet store made with the help of React. With data presented in the table, and a view of each animal individually in its own componte." ,link:"https://github.com/SHUANESH/pet_shop" },
    {headline:"Office website",img:img9 ,paragraph:"An office website created using React Component. With a combination of gallery, contact form" ,link:"https://github.com/SHUANESH/office_app" },
    {headline:"Website for searching",img:img8 ,paragraph:"A website for searching for existing users in the system. New users can also be added to the system by filling out a form properly." ,link:"https://shuanesh.github.io/existing_users/" }, 
    {headline:"calculator project",img:img2 ,paragraph:"Create a calculator from scratch using JS and CSS with all the functionality required in the calculator" ,link:"https://shuanesh.github.io/calculator/" },
    {headline:"Dynamic table project",img:img1 ,paragraph:"In this project I used JS to create data to the table dynamically, and CSS is also used to design the project" ,link:"https://shuanesh.github.io/transport_project/" },
    {headline:"Photography website",img:img3 ,paragraph:"A photo website built using HTML and CSS only. Made with animations." ,link:"https://shuanesh.github.io/Photography-project/" },
    {headline:"Sample image site for a hotel",img:img4 ,paragraph:"A sample website made for the hotel using CSS and HTML combined with animations." ,link:"https://shuanesh.github.io/hotel-app/" },
    {headline:"Cake website",img:img5 ,paragraph:"A cake recipe website built using CSS and HTML only after two weeks of course" ,link:"https://shuanesh.github.io/cake-app/" },
    {headline:"Resume website",img:img6 ,paragraph:"First resume project done using CSS and HTML after three months in the course" ,link:"https://shuanesh.github.io/resume-app/" },

];

export const ContText = createContext(ProjectArray);
export const ContTextProvider = ContText.Provider; 

export function UseContText(){
    return useContext(ContText)
}

// Portfolio context in Hebrew

const ProjectArrayHebrew =[

    {headline:"אתר סרטים",img:img7 ,paragraph:"  באתר יש אופצית גם לחיפוש והצגת הנתונים באופן דינמי (API) אתר של סרטים שנעשה בעזרת ג'אווה סקריפט ועבודה עם שרת חיצוני " ,link:"https://shuanesh.github.io/External_server/" },
    {headline:"אתר חנות חיות  ",img:img10 ,paragraph:"אתר לחנות חיות שנעשה עם עבודה בריאקט ושימוש בקומפוננטות מעבר בין הקומפונטות נעשה בעזרת ראוטר ניתן לעבור בין קומפוננטה שמכילה טבלה עם תמונות ומידע על חיות, קומפוננטה של דף בית, ולכל חייה יש קומפונטטה שמציגה מידע עם תמונות" ,link:"https://github.com/SHUANESH/pet_shop" },
    {headline:"אתר תדמית למשרד",img:img9 ,paragraph:".אתר תדמינת למשרד שהוקם בעזרת שימוש בריאקט כמו כן ניתן לראות באתר דוגמאות לשימוש בטופס הרשמה והשארת פרטים. וגלריית תמונות של המשרד" ,link:"https://github.com/SHUANESH/office_app" },
    {headline:"אתר חיפוש של סטודנטים",img:img8 ,paragraph:".באתר הזה ניתן לחפש משתמשים קיימים במערכת ולהוסיף משתמשים חדשים למערכת על ידי שימוש בטופס הרשמה וגם ניתן לעבור באותו הדף לאתר של אותו משתמש שנבחר " ,link:"https://shuanesh.github.io/existing_users/" }, 
    {headline:"אתר מחשבון",img:img2 ,paragraph:".css בפרויקט זה יצרתי מחשבון בעזרת שימוש בג'אווה סקריפט עם כל הפונקציונליות הנדרשות במחשבון וכמובן שעוצב בעזרת " ,link:"https://shuanesh.github.io/calculator/" },
    {headline:"פרויקט הוספה לטבלה באופן דינמי",img:img1 ,paragraph:" בפרויקט הזה יצרתי אתר לרכבים והוספה של נתונים חדשים  באופן דינמי לתוך טבלה" ,link:"https://shuanesh.github.io/transport_project/" },
    {headline:"אתר לבית ספר לצילום",img:img3 ,paragraph:"עם שילוב של אנימציות html and css אתר זה נבנה לאחר חודש בלבד בקורס בעזרת" ,link:"https://shuanesh.github.io/Photography-project/" },
    {headline:"אתר תדמית למלון",img:img4 ,paragraph:"ושילוב של אנימציות בפרויקט html and css אתר זה נבנה למלון עם גלריה ותפריט בעזרת שימוש" ,link:"https://shuanesh.github.io/hotel-app/" },
    {headline:"אתר מתכונים לעוגות",img:img5 ,paragraph:"ושילוב של אנימציות בפרויקט html and css אתר זה הוא אתר לעוגות ומתכונים שנבנה בעזרת שימוש" ,link:"https://shuanesh.github.io/cake-app/" },
    {headline:"אתר קורות חיים",img:img6 ,paragraph:"ושילוב של אנימציות בפרויקט html and css אתר של קורות חיים נבנה בעזרת שימוש" ,link:"https://shuanesh.github.io/resume-app/" },

];

export const ContTextHebrew = createContext(ProjectArrayHebrew);
export const ContTextHebrewProvider = ContTextHebrew.Provider; 

export function UseContTextHebrew(){
    return useContext(ContTextHebrew)
}


// Skills context
const ArrayOfSkillsLogo = [
   
    { img:cssLogo ,headline:"CSS"},
    { img:git ,headline:"github"},
    { img:htmlLogo ,headline:"HTML"},
    { img:jsLogo ,headline:"JavaScript"},
    { img:reactLogo ,headline:"React"},
    { img:CLogo ,headline:"C#"},
    { img:bootLogo ,headline:"Bootstrap"},
    { img:jqLogo ,headline:"jQuery"},
    { img:mongoLogo ,headline:"MONOGDB"},
    { img:nodeLogo ,headline:"Nodejs"},
    { img:mvsLogo ,headline:"MVC"},
    { img:sqlLogo ,headline:"MSSQL"},
    
    
]
 export const ContextForSkills = createContext(ArrayOfSkillsLogo);
 export const ContextForSkillsProvider = ContextForSkills.Provider;

export function UseContextForSkills(){
    return useContext(ContextForSkills)
}

// Home context in English
const ArrayOfAboutMe = [
    { img:firstCors ,date:"21.12.2020",headline:"The beginning" , paragraph:"This photo was taken on the first day of the course. It was a exciting moment."},
    { img:AboutMe1 ,date:"16.04.2021" ,headline:"Student panel", paragraph:"In this picture me and 2 other students were chosen to speak in front of new candidates."},
    { img:AboutMe2 ,date:"07.06.2021" ,headline:"Ran Barzik Lecture" , paragraph:"In this picture, we are given a lecture by Ran Barzik on how to integrate into the high-tech world."},
    { img:timeP ,date:"02.06.2021" ,headline:"Just in time" , paragraph:"In this picture I had to talk about the importance of the concept just in time, and how it is reflected in the world of programming."},
    { img:ranAndMe ,date:"30.06.2021" ,headline:"Second lecture" , paragraph:"A second lecture by Ran Barzik and this time on an important topic of information security and cyber."},
    
]

export const ContextAboutMe = createContext(ArrayOfAboutMe);
export const ContextAboutMeProvider = ContextAboutMe.Provider;

export function UseContextAboutMe(){
    return useContext(ContextAboutMe)
}

// Home context in Hebrew
const ArrayOfAboutMeHebrew = [
    { img:firstCors ,date:"21.12.2020",headline:"ההתחלה" , paragraph:".תמונה זאת צולמה בקמפוס של טק קריירה ביום הראשון של הקורס רגע מרגש ומשמעותי בשבילי"},
    { img:AboutMe1 ,date:"16.04.2021" ,headline:"פאנל סטודנטים", paragraph:"בתמונה פה אני ועוד 2 סטודנטים התבקשנו לדבר על הקורס שאנו נמצאים בו ולתת דגשים חשובים למועמדים חדשים שמתמיינים לאותו הקורס."},
    { img:AboutMe2 ,date:"07.06.2021" ,headline:"הרצאה ראשונה של רן ברזיק" , paragraph:".רן ברזיק בא לתת הרצאה בנושא חשוב לנו הסטודנטים על איך להשתלב בתעשייה מבלי ניסיון קודם או תואר למי שאין"},
    { img:timeP ,date:"02.06.2021" ,headline:"Just in time" , paragraph:"בתמונה הזאת אני מציגה בפני הסטודנטים והמרצה על החשיבות המושג בדיוק בזמן ואיך הוא מתקשר לעולם התיכנות."},
    { img:ranAndMe ,date:"30.06.2021" ,headline:"הרצאה שנייה של רן ברזיק" , paragraph:".בהרצאה שנייה של רק ברזיק הוא בא לדבר על הנושא החשוב אבטחת מידע וסייבר הרצאה מרתקת ומעניינת וכמובן חשובה"},
    
]

export const ContextAboutMeHebrew = createContext(ArrayOfAboutMeHebrew);
export const ContextAboutMeHebrewProvider = ContextAboutMeHebrew.Provider;
export function UseContextAboutMeHebrew(){
    return useContext(ContextAboutMeHebrew)
}


// stat global

export const ContextTheme = createContext({});
export const ContextThemeProvider = ContextTheme.Provider;

export function GlobalSetTheme(){
    return  useContext(ContextTheme);
}
