import React from 'react'
import { useSelector } from 'react-redux'

const ComponentText = () => {

    const state = useSelector(state=> state);
    const {countValue} = state;

  return (
    <div>ComponentText value = {countValue}</div>
  )
}

export default ComponentText