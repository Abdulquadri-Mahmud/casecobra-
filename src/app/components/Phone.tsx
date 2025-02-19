import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc: string,
    dark?: boolean
}

export default function Phone({imgSrc, className, dark = false, ...props}: PhoneProps) {
  return (
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props}>
        <img className='pointer-events-none select-none z-50' src={dark? '/phone-template-dark-edges.png' 
        : '/phone-template-white-edges.png'} alt='phone image'/>
        <div className="absolute -z-10 inset-0">
            <img className='object-cover' src={imgSrc} alt='overlaying phone image'/>
        </div>
    </div>
  )
}
