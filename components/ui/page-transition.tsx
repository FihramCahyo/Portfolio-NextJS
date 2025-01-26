'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransitionLayout({
    children
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: 0.75,
                }}
                variants={{
                    initialState: {
                        opacity: 0,
                        y: '100px',
                    },
                    animateState: {
                        opacity: 1,
                        y: '0%',
                    },
                    exitState: {
                        opacity: 0,
                        y: '-100px',
                    },
                }}
                className="w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>

    )
}
