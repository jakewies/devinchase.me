import React, { Component } from 'react'
import {
  Container,
  ContainerInner,
  Title,
  Blurb,
  Button,
} from '../styles/pages/home.styled'

const HomePage = () => (
  <Container>
    <ContainerInner>
      <div>
        <Title>Devin Chase</Title>
        <Blurb>Artist & Interior Designer located in Orlando, FL.</Blurb>
      </div>
      <Button href="mailto:devinmchase@gmail.com?subject=Contacting you from your website">
        SAY HELLO
      </Button>
    </ContainerInner>
  </Container>
)

export default HomePage
