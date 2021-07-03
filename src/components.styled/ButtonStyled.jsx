import styled from 'styled-components';
import Button from '../components/Features/Button/Button';

export const ButtonStyled = styled(Button)`
width: ${(props) => props.width};
height: ${(props) => props.height};
background-color: ${(props) => props.bgc};
border-radius: ${(props) => props.radius};
box-shadow: ${(props) => props.shadow};
font-size: ${(props) => props.size};
color: ${(props) => props.color};
`