'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface Lazy3DLoaderProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
}

export default function Lazy3DLoader({
  children,
  fallback,
  rootMargin = '100px',
  threshold = 0.1
}: Lazy3DLoaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
        }
      },
      {
        rootMargin,
        threshold
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, threshold, hasLoaded])

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible ? children : fallback}
    </div>
  )
}
