"use client"

import { useScroll, useTransform, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

export const Timeline = ({ data }) => {
  const contentRef = useRef(null)
  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!contentRef.current) return

    const updateHeight = () => {
      const rect = contentRef.current.getBoundingClientRect()
      setHeight(rect.height)
    }

    updateHeight()

    window.addEventListener("resize", updateHeight)
    return () => {
      window.removeEventListener("resize", updateHeight)
    }
  }, [data])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={contentRef} className="relative mx-auto max-w-7xl pb-12">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-32">
            <div className="sticky top-40 z-40 flex max-w-xs items-center self-start md:max-w-sm md:w-full md:flex-row">
              <div className="absolute left-3 h-10 w-10 rounded-full bg-white md:left-3">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-2 border-[#FDAA48] bg-[#FDAA48]/40" />
                </div>
              </div>
              <h3 className="hidden text-xl font-bold text-blue-900 md:block md:pl-20 md:text-4xl">{item.title}</h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-400 md:hidden">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}

        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform
          }}
          className="absolute left-8 top-0 w-[4px] rounded-full bg-[#FDAA48] md:left-8"
        />
      </div>
    </div>
  )
}

Timeline.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
}
