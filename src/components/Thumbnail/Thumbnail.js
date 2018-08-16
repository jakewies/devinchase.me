import React, { Component } from 'react'
import { Container, StyledThumbnail, Overlay } from './styled'

class Thumbnail extends Component {
  state = {
    overlayVisible: false,
  }

  toggleOverlay = () => {
    this.setState(prev => ({ overlayVisible: !prev.overlayVisible }))
  }

  render() {
    const { overlayVisible } = this.state
    const { img, title } = this.props
    return (
      <Container>
        <StyledThumbnail sizes={img} />
        <Overlay
          onMouseEnter={this.toggleOverlay}
          onMouseLeave={this.toggleOverlay}
          title={title}
          visible={overlayVisible}
        >
          {title}
        </Overlay>
      </Container>
    )
  }
}

export default Thumbnail
