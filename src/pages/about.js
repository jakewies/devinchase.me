import React, { Component } from 'react'
import {
  Container,
  ContainerInner,
  AboutHeader,
  A,
} from '../styles/pages/about.styled'

export default () => (
  <Container>
    <ContainerInner>
      <AboutHeader>
        Being an artist, my brain views the world with a different perspective.
      </AboutHeader>
      <p>
        Anything remotely creative excites me. I see the potential in
        everything, including the details.
      </p>
      <p>
        My passion is to provide unique solutions to areas that are lacking
        originality. I love Interior Design because it challenges me to bring my
        concepts and ideas to the next level.
      </p>
      <p>
        I currently work at a boutique interior design firm in Fort Lauderdale,
        Florida. I am surrounded by a powerful team of creative women who
        continue to inspire and support each other every day. When I am not
        working, I am working on my passion project,{' '}
        <A target="_blank" href="https://www.etsy.com/shop/chaseprints">
          Chase Prints
        </A>
        .
      </p>
    </ContainerInner>
  </Container>
)
