import React from "react";
import {twMerge} from "tailwind-merge";
import {className} from "postcss-selector-parser";

interface BoxProps {
    children: React.ReactNode,
    classname?: string
}

const Box = ({children, classname}: BoxProps) => {
    return (
        <div className={twMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
        `,
            classname
        )}>
            {children}
        </div>
    )
}

export default Box