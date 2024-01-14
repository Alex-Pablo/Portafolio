"use client";
import {motion} from "framer-motion"

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y:0
    }
}
export default function TextAnimation() {
    const text = "d/alex/aventuras:~$ "
  return (
    <>
    <motion.span
    initial ="hidden"
    animate= "visible"
    transition={{staggerChildren:0.2}}
    arian-hidden
    >
        {
            text.split("").map((char, index) => (
                <motion.span key={index} className="inline-block" variants={defaultAnimations}>{char}</motion.span>
            ))
        }        
    </motion.span>
    </>
  );
}
