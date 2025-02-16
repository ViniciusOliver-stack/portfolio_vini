"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

export function RotateWords({
  text = "Rotate",
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  text: string
  words: string[]
}) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 5000)
    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words.length])
  return (
    <div className="text- tracking-tighter md:leading-[2rem] w-fit flex items-center gap-1.5">
      {text}{" "}
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
