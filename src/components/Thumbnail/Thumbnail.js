import React, { Component } from 'react'
import Link from 'next/link'
import { Container, StyledThumbnail, Overlay } from './styled'

class Thumbnail extends Component {
  state = {
    overlayVisible: false
  }

  toggleOverlay = () => {
    this.setState(prev => ({ overlayVisible: !prev.overlayVisible }))
  }

  render() {
    const { overlayVisible } = this.state
    const { thumbnail, slug } = this.props
    return (
      <Link href={`/portfolio/item?slug=${slug}`} as={`/portfolio/${slug}`} prefetch>
        <Container>
          <StyledThumbnail src={thumbnail.src} />
          <Overlay
            onMouseEnter={this.toggleOverlay}
            onMouseLeave={this.toggleOverlay}
            title={thumbnail.title}
            visible={overlayVisible}
          >
            {thumbnail.title}
          </Overlay>
        </Container>
      </Link>
    )
  }
}

export default Thumbnail
