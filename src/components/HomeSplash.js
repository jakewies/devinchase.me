import React from 'react'
import styled from 'styled-components'
import { media } from '../utils'

const HomeSplash = () => (
  <Container>
    <ContainerInner>
      <div>
        <Title>Devin Chase</Title>
        <Blurb>Artist & Interior Designer located in Fort Lauderdale, FL.</Blurb>
      </div>
      <Button href="mailto:devinmchase@icloud.com?subject=Contacting you from your website">
        SAY HELLO
      </Button>
    </ContainerInner>
  </Container>
)

const Container = styled.div`
  height: 100%;
  max-height: 600px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`

const ContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${media.mobile`
    display: block;
  `};
`

const Title = styled.h1`
  color: #4c4e51;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 3rem;
`

const Blurb = styled.p`
  color: #6c6e70;
  width: 300px;
  padding-left: 5px;
`

const Button = styled.a`
  display: block;
  background-color: #e5e8ed;
  color: #999ba2;
  width: 125px;
  padding: 10px 0;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  text-decoration: none;
  text-align: center;

  ${media.mobile`
    margin-top: 2rem;
  `};
`

export default HomeSplash
