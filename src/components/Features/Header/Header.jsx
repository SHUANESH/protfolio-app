import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';

const DivContinuer = styled.div`
background-color: springgreen;
`


export default function Header() {
    return (
        <DivContinuer>
            <Sidebar/>
        </DivContinuer>
    )
}
