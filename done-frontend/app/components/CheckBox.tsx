'use client'

import React from 'react'

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    // You can add extra, component-specific props here if needed later.
}

const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
    const { onChange, className, ...rest } = props
    return (
        <input
            type="checkbox"
            ref={ref}
            onChange={onChange}
            className={className}
            {...rest}
        />
    )
})

CheckBox.displayName = 'CheckBox'
export default CheckBox
