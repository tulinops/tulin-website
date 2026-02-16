"use client"

import { useState, useEffect } from "react"

interface TypeWriterProps {
  words: string[]
  style?: React.CSSProperties
}

export function TypeWriter({ words, style = {} }: TypeWriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(word.slice(0, text.length + 1))
          if (text.length + 1 === word.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setText(word.slice(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setIndex((index + 1) % words.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )

    return () => clearTimeout(timer)
  }, [text, isDeleting, index, words])

  return (
    <span style={style}>
      {text}
      <span className="animate-pulse ml-0.5 text-indigo-400">|</span>
    </span>
  )
}
