import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge';
import './_button.scss';

type ButtonProps = {
    to?: string,
    label?: string,
    className?: string,
    onButtonClick?: ()=> void,
    type?: 'link'|'button'|'submit',
    isLoading?: boolean,
}
const Button = ({to, label, className, onButtonClick, type = 'button', isLoading = false}:ButtonProps) => {
    const buttonStyle = twMerge(isLoading?'btn btn-loader':'btn',  className)
  return (
    <>
     {type === 'link' && <Link href={to?to:''} className={buttonStyle} > { label } </Link> }
     {type !== 'link'  && <button type={type} className={buttonStyle}  disabled={isLoading} onClick={onButtonClick}> { label } </button> }
{/*  <ClipLoader v-if="isLoading"  /> */}

    </>
  )
}

export default Button