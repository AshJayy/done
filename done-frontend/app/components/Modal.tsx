"use client"

import React, { useEffect, useRef, useState } from 'react'
import Button from '@/app/components/Button'

interface ModalProps {
  title?: string
  triggerLabel?: string
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ title = 'Modal', triggerLabel = 'Open', children, open, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = typeof open === 'boolean'
  const isOpen = isControlled ? (open as boolean) : internalOpen

  const setOpen = React.useCallback((v: boolean) => {
    if (isControlled) {
      onOpenChange?.(v)
    } else {
      setInternalOpen(v)
    }
  }, [isControlled, onOpenChange])

  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    dialogRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, setOpen])

  return (
    <>
      <Button onClick={() => setOpen(true)}>{triggerLabel}</Button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          tabIndex={-1}
          ref={dialogRef}
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-5 rounded-lg min-w-[280px] max-w-[90%] shadow-lg z-50"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="m-0 text-lg font-medium">{title}</h3>
              <Button onClick={() => setOpen(false)} className="ml-3">Close</Button>
            </div>

            <div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
