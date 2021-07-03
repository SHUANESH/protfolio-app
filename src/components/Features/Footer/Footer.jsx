import styled from 'styled-components';

const FooterStyled = styled.footer`
  width: 100%;
  background-color: #000000cf;
  color: white;
  text-align: center;
  margin-top: 50px;
  margin-bottom: -25px;
`
const AStyled = styled.a`
font-size: 30px;
padding: 8px;
color: white;
&:hover{
    font-size: 35px;
    color: #3ec5e7;
}
`
const AEmail = styled.a`
text-decoration: none;
color: white;
font-size: 20px;
&:hover{
  color: aquamarine;
}
`
export default function Footer() {
    return (
        <FooterStyled className="footer-container">
        <div>
              <p>contact me</p>
            <AEmail href={`mailto:shuanesh1817@gmail.com`}>
                
                <p>shuanesh1817@gmail.com</p>
            </AEmail>
            <AStyled href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></AStyled>
            <AStyled href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin"></i></AStyled>
            <AStyled href="https://github.com/SHUANESH"><i class="fab fa-github-square"></i></AStyled>
          <p>
            Copyright &copy; 2020, All Rights Reserved<br/>shuanesh ababa
          </p>
        </div>
        </FooterStyled>
    )
}
