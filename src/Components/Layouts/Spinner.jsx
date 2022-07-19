import React from 'react'
import spinner from './Assets/spinner.gif'

function Spinner() {
  return (
    <img alt='Loading...' src={spinner} className='mx-auto' width={180}/>
  )
}

export default Spinner