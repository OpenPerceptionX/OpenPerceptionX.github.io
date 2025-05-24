"use client"

import { motion } from "framer-motion"


function FadeIn({
    children,
    ...props
}: {
    children: React.ReactNode
}) {
    return (
        <motion.div 
            {...props}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3, duration: .6 }}
        >
            {children}
        </motion.div>
    )
}

export { FadeIn }
