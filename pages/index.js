import React, { Component } from 'react'
import styled from 'styled-components'
import { Page, HomeSplash, About } from '../src/components'

const slideHeight = 75

class Home extends Component {
  slide = e => {
    const slider = document.getElementsByClassName('slider')[0]
    slider.classList.toggle('slider--active')
    const button = document.getElementsByClassName('slider__button')[0]
    button.classList.toggle('slider__button--active')
  }

  render() {
    return (
      <Page>
        <SliderContainer>
          <SliderInner className="slider">
            <Slide>
              <HomeSplash />
            </Slide>
            <Slide>
              <About />
            </Slide>
          </SliderInner>
          <SliderButtonContainer>
            <SliderButton className="slider__button" onClick={this.slide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </SliderButton>
          </SliderButtonContainer>
        </SliderContainer>
      </Page>
    )
  }
}

const SliderContainer = styled.div`
  height: ${slideHeight}vh;
  overflow: hidden;
  position: relative;
`

const SliderInner = styled.div`
  height: ${2 * slideHeight}vh;

  & > * {
    height: 75vh;
  }
`

const SliderButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const SliderButton = styled.div`
  color: #4c4e51;
  cursor: pointer;
`

const Slide = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Home
