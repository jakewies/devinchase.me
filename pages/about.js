import React, { Component } from 'react'
import styled from 'styled-components'
import { Page } from '../src/components'

export default () => (
  <Page>
    <Container>
      <ContainerInner>
        <AboutHeader>Anything remotely creative excites me.</AboutHeader>
        <StyledP>
          Being an artist, my brain views the world with a different perspective from others. I see
          the potential in everything, including the details.
        </StyledP>
        <StyledP>
          My passion is to provide unique solutions to areas that are lacking originality. I love
          Interior Design because it challenges me to bring my concepts and ideas to the next level.
        </StyledP>
        <StyledP>
          I currently work at a boutique interior design firm in Fort Lauderdale, Florida. I am
          surrounded by a powerful team of creative women who continue to inspire and support each
          other every day. When I am not working, I am working on my passion project,{' '}
          <StyledA target="_blank" href="https://www.etsy.com/shop/chaseprints">
            Chase Prints
          </StyledA>.
        </StyledP>
      </ContainerInner>
    </Container>
  </Page>
)

const Container = styled.div`
  height: 100%;
  max-height: 600px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 34rem;
  margin: 0 auto;
  padding: 0 2rem;
`

const ContainerInner = styled.div``

const AboutHeader = styled.h2`
  color: #4c4e51;
  font-weight: normal;
  font-size: 1.4rem;
  font-style: italic;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
`

const StyledP = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #4c4e51;
  margin-bottom: 1.5rem;
`

const StyledA = styled.a`
  color: #4c4e51;
  font-style: italic;
`
