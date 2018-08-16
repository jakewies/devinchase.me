import React from 'react'
import { Container } from 'unstated'

class NavContainer extends Container {
  state = {
    mobileNavActive: false,
  }

  toggleMobileNav = () => {
    this.setState(prevState => ({
      mobileNavActive: !prevState.mobileNavActive,
    }))
  }
}

export default NavContainer
