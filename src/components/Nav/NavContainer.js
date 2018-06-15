import React from 'react'
import { Container } from 'unstated'

class NavContainer extends Container {
  state = {
    mobileNavActive: false
  }

  toggleMobileNav = () => {
    console.log('toggling')
    this.setState(prevState => ({ mobileNavActive: !prevState.mobileNavActive }))
  }
}

export default NavContainer
