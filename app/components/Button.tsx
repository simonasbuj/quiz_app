'use client'

import clsx from "clsx"

interface ButtonProps {
    text: string,
    onClick: () => void,
    shiftDirection: number,
    disabled: boolean
}

export default function Button({text, onClick, shiftDirection, disabled}: ButtonProps) {

    return(
        <button
            onClick={onClick}
            type="button"
            disabled={disabled}
            className={clsx(`
                button
            `,
            // (shiftDirection > 0 && !disabled) ? "hover:translate-x-[7px]" : "hover:-translate-x-[7px]",
            (shiftDirection > 0 && !disabled) && "hover:translate-x-[7px]",
            (shiftDirection < 0 && !disabled) && "hover:-translate-x-[7px]",
            disabled && "opacity-50 cursor-default",
            )}
        >
            {text}
        </button>
    )

}