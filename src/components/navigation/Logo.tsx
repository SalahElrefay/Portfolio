import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <a href="/" >
      <Image src="/portfolio-svgrepo-com.svg" alt="logo" width={40} height={40} />
    </a>
  )
}

export default Logo