import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';

const Container = styled.div`
    display: flex;
    justify-content: center;
    left:0;
    bottom:0;
    right:0;
`;

const Logo = styled.text`
    padding: 18px 10px;
    color: black;
    font-weight: bold;
    font-size: 16px;
`;


const Footer = () => {
    return (
        <Container>
            <Logo>Producto de Corelabs <FaIcons.FaRegCopyright/> 2021</Logo>
        </Container>
    )
}

export default Footer;