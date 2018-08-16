import React from 'react'
import Carousel from 'nuka-carousel'
import { Container, Previous, Next } from './styled'

class Gallery extends React.Component {
  componentDidMount() {
    this.resize()
  }

  componentDidUpdate() {
    this.resize()
  }

  resize = () => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  render() {
    const { images } = this.props
    return (
      <Container>
        <Carousel
          wrapAround
          autoPlay
          renderCenterLeftControls={({ previousSlide }) => (
            <Previous onClick={previousSlide} />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Next onClick={nextSlide} />
          )}
          renderBottomCenterControls={null}
        >
          {images}
        </Carousel>
      </Container>
    )
  }
}

export default Gallery
