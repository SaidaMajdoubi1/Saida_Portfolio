import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Section = ({ id, title, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id={id} className="py-20 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto ${inView ? 'fade-in visible' : 'fade-in'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default Section