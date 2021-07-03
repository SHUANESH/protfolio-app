import styled from 'styled-components';
import DivContainer from '../components/DivContainer.component/DivContainer.component';

export const DivContainerStyled = styled(DivContainer)`
*{
  padding:0px;
  margin:0px;
}
display: ${(props) => props.flex};
flex-direction:  ${(props) => props.direction};
justify-content: ${(props) => props.justify};
align-items:${(props) => props.align};
width: ${(props) => props.width};
height: ${(props) => props.height};
background-color: ${(props) => props.bgc};
border-radius: ${(props) => props.radius};
box-shadow: ${(props) => props.shadow};
max-width: ${(props) => props.maxWidth};
max-height: ${(props) => props.maxHeight};
`
