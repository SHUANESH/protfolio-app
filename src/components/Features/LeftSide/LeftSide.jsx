import React from 'react';
import styled from 'styled-components';


const LeftSideStyledContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
width: 30%;
height: 100px;
padding-top:70px;

`

const UserImg = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
border: 2px solid #ffff;
background-color:black ;
`
const StyledH1 = styled.h1`
color: #ffff;
font-size: 20px;
font-weight: bold;
margin-top: 16px;
`
const StyledH2 = styled.h2`
color: #ffff;
font-size: 14px;
font-weight: normal;
margin-top: 8px;
`

const SocialButtons = styled.ul`
    list-style-type: none;
    display: flex;
    margin-top: 16px;
    li {
        font-size: 12px !important;
        color: #fff;
        margin: 0 8px;
    }
    a {
        color: #fff;
        display: inline-block;
        padding: 6px;
        border: 1px solid #fff;
        text-decoration: none;
        border-radius: 8px;
    }
`;

const DownloadCVButton = styled.button`
    display: inline-block;
    position: relative;
    padding: .8em 2.1em;
    margin-top: 48px;
    margin-bottom: .75em;
    margin-right: .25em;
    font-size: 1em;
    line-height: 1.2;
    border: 0;
    outline: 0;
    border: 2px solid #fff;
    color: #fff;
    text-shadow: none;
    background-color: transparent;
    border-radius: 30px;
    font-family: poppins,Helvetica,sans-serif;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    box-shadow: 0 10px 10px -8px rgb(0 0 0 / 22%);
    cursor: pointer;
`

export default function LeftSide() {
    return (
        <LeftSideStyledContainer >
            <UserImg  src="https://images.pexels.com/photos/7382484/pexels-photo-7382484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <StyledH1>Shuanesh Ababa</StyledH1>
            <StyledH2>Full Stack Developer</StyledH2>
        <SocialButtons>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
        </SocialButtons>
        <DownloadCVButton>Download CV</DownloadCVButton>
        </LeftSideStyledContainer>
    )
}
