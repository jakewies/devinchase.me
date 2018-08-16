import React from 'react'
import styled from 'styled-components'

const Tags = ({ items }) => (
  <div>
    {items.map((tag, i) => (
      <StyledTag key={i}>{tag}</StyledTag>
    ))}
  </div>
)

const StyledTag = styled.span`
  display: inline-block;
  border: 1px solid #82a7a6;
  border-radius: 16px;
  font-size: 12px;
  padding: 4px 8px;
  color: #82a7a6;
  background-color: #f3f7f6;
  margin-right: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-right: 0;
  }

  &:before {
    content: '#';
    margin-right: 1px;
  }
`

export default Tags
