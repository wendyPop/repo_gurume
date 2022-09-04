import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterWrapper>
            ©2022 최로하
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
  text-align: center;
  padding: 32px 0;
`

export default Footer
