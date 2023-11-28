import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500'>
      <div className='hero-map' />

      {/* LEFT */}

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <h1 className='bold-52 lg:bold-88'>Train Go Connect With QR</h1>  
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque 
          fugit adipisci numquam libero doloremque ipsa quo suscipit saepe 
          quidem et, voluptatibus illo. Quae magni alias porro iste placeat 
          neque
        </p>
      </div>

    </section>
  )
}

export default Hero
