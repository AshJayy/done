'use client'

import React from 'react'

interface CheckBoxProps {
    id: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}

const CheckBox = ({id, handleChange}: CheckBoxProps) => {
    return (
        <input type="checkbox" onChange={(e) => handleChange(e, id)} />
    )
}
export default CheckBox
