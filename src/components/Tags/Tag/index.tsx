import React from 'react'
import { TagName } from './styles'

interface TagProps {
  id: number;
  name: string;
  color: string;
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <>
      <TagName bgColor={props.color}>
        <strong>{props.name}</strong>
      </TagName>
    </>
  )
}

export default Tag