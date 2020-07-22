import React from 'react'
import Backdrop from '../../Backdrop'
import Spinner from '../Spinner'

const loading = () => (
  <Backdrop>
    <Spinner />
  </Backdrop>
)

export default loading