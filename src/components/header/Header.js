import React from 'react'
import styled from 'styled-components'
import Logo from '../../asssets/logo.png'
export const Header = () => {
  return (
    <Navigation>

        
    {/* image */}
    <img src={Logo} alt='logo' />
    {/* searchbar */}
    {/* options */}
    </Navigation>
  )
}


const Navigation = styled.nav`
height:100px;
width:100%;
border:1px solid red;
padding:1rem;

img{
    width:100px;
    height:50px;
    
}

`;
