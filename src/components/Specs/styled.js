import styled from 'styled-components'

export const StyledSpecs = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const Spec = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  font-family: 'Josefin Sans', sans-serif;
  margin-right: 2rem;
`

export const Key = styled.span`
  color: #c4c4c4;
  display: inline-block;
  margin-right: 5px;

  @media (max-width: 500px) {
    width: 75px;
    margin-right: 0;
  }
`

export const Value = styled.span``
