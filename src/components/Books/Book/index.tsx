import React from 'react'


interface Props {
  id: number;
  title: string;
  author: string;
  image_url: string;
}

const Book: React.FC<Props> = (props) => {
  return (
    <span>-</span>
  )
}

export default Book