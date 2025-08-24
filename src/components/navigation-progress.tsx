'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import LoadingBar, { type LoadingBarRef } from 'react-top-loading-bar'

export function NavigationProgress() {
  const ref = useRef<LoadingBarRef>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Start loading when route changes
    ref.current?.continuousStart()
    
    // Complete loading after a short delay to show the progress
    const timer = setTimeout(() => {
      ref.current?.complete()
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <LoadingBar
      color='var(--muted-foreground)'
      ref={ref}
      shadow={true}
      height={2}
    />
  )
}
