import React from 'react'
import { useDispatch } from 'react-redux'
import { handleIncreaseCountAction } from '../store/slice'

const ComponentButton = () => {
    const dispatch = useDispatch()

    function handleButton(){
        dispatch(handleIncreaseCountAction(
            {id : 1,
            name: "Aviral",}
        ))
    }
  return (
    <div>
    <button onClick={handleButton} className=' border-black bg-black text-white' >ComponentButton</button>
    </div>
)
}

export default ComponentButton