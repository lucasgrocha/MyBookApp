import React, { useState, useEffect } from 'react'
import api from '../../../../services/api'
import { Star } from '@styled-icons/evaicons-solid'
import styled from 'styled-components';

export const StyledStart = styled(Star)`
  width: 15px;
  fill: yellow;
`;


interface Props {
  bookId: number;
}

interface Rate {
  id: number;
  point: number;
  message: string;
  book_id: number;
}

const RatingPoint: React.FC<Props> = (props) => {
  const [rates, setRates] = useState<Rate[]>()

  useEffect(() => {
    api.get(`http://localhost:3333/rates?book_id=${props.bookId}`).then(response => {
      setRates(response.data)
    })
  }, [])

  if (!rates) return null

  let stars = []

  for(let c = 0; c < rates[0].point; c++) {
    stars.push(<StyledStart key={c} />)
  }

  return (
    <>
      {stars}
    </>
  )
}

export default RatingPoint