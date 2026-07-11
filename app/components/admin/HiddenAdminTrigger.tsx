'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function HiddenAdminTrigger({
  children,
}: {
  children: React.ReactNode
}) {
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  const startPress = () => {
    timerRef.current = setTimeout(() => {
      router.push('/admin/login')
    }, 3000)
  }

  const cancelPress = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  return (
    <div
      onMouseDown={startPress}
      onMouseUp={cancelPress}
      onMouseLeave={cancelPress}
      onTouchStart={startPress}
      onTouchEnd={cancelPress}
    >
      {children}
    </div>
  )
}