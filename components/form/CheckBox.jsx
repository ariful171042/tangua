import React from 'react'

const CheckBox = ({label,id}) => {
  return (
    <div className='flex gap-3'>
        <input type="checkbox"  id={id}  className='active:text-red-500'/>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckBox