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

        <div className="text-lg sm:text-2xl text-start tracking-tighter md:leading-[4rem] flex items-start jusitfy-start gap-1.5 text-white md:flex-row md:gap-2">
            {text}{' '}
            <AnimatePresence mode="wait">
                <motion.p
                    key={words[index]}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#F96E2A] block md:inline"
                >
                    {words[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    )
}
