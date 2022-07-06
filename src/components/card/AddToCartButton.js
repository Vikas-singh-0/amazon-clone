import React from 'react'
import styled from 'styled-components'
export default function AddToCartButton(props) {

  return (
    <Button>{props.children}</Button>
  )
}

const Button = styled.button`
        position:absolute;
        bottom:1rem;
        width:75%;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(rgb(252, 213, 115), rgb(251, 191, 36));
        border:none;
        height:7.4%;
`
