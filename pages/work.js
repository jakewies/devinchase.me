import React from 'react'
import styled from 'styled-components'
import { Page } from '../src/components'

const Work = () => (
  <Page>
    <Flexed>
      <Emoji>👩🏻‍💻</Emoji>
      <p>Coming soon!</p>
    </Flexed>
  </Page>
)

const Flexed = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Emoji = styled.span`
  font-size: 2rem;
`

export default Work
