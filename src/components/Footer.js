import React from 'react'
import styled from 'styled-components'
import SocialIcons from './SocialIcons'

export default () => (
  <Footer>
    <FooterInner>
      <SocialIcons />
    </FooterInner>
  </Footer>
)

const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
`

const FooterInner = styled.div`
  width: 100%;
`
