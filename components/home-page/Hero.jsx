import React from 'react'
import Image from 'next/image'
import classes from './hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/user.png'
          alt='An image showing John'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm John</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or NextJS.
      </p>
    </section>
  )
}

export default Hero
