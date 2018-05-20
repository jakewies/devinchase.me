import React from 'react'
import styled from 'styled-components'

const HomeSplash = () => (
  <HomeSplashContainer>
    <Title>Devin Chase</Title>
    <FlexContainer>
      <Blurb>Artist & Interior Designer located in Fort Lauderdale, FL.</Blurb>
      <Button href="mailto:devinmchase@icloud.com?subject=Contacting you from your website">
        SAY HELLO
      </Button>
    </FlexContainer>
  </HomeSplashContainer>
)

const HomeSplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-bottom: 25px;
  }

  @media (min-width: 650px) {
    flex-direction: row;
    p {
      margin-bottom: 0;
    }
  }
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
`

export default HomeSplash
