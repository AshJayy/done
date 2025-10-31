"use client"

import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children = 'Button', type = 'button', onClick, disabled, ...rest } = props

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
            e.preventDefault()
            return
        }
        onClick?.(e)
    }
    return (
        <button
            ref={ref}
            type={type}
            className={"inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-neutral-500 hover:bg-neutral-700 transition-colors duration-500".trim()}
            onClick={handleClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button'
export default Button
