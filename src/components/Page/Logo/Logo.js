import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { StyledLogo } from './styled'

const Logo = ({ router }) =>
  router.route !== '/' && (
    <StyledLogo>
      <Link href="/" prefetch>
        <a>Devin Chase</a>
      </Link>
    </StyledLogo>
  )

export default withRouter(Logo)
