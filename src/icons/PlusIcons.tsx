import React from 'react'
import { IconProps } from './Icon'
import { sizeVariant } from './Icon'
const PlusIcons = (props:IconProps) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`${sizeVariant[props.size]}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

    </>
  )
}

export default PlusIcons
