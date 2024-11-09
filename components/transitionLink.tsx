import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import React, {  ReactNode } from 'react'
interface TransitionLinkProps extends LinkProps{
    children:ReactNode
    href:string
    className?:string
}

const sleep=(ms:number):Promise<void>=>{
    return new Promise(resolve => setTimeout(resolve, ms))
}

const TransitionLink = ({href,children,...props}:TransitionLinkProps) => {
    
const router = useRouter()
  return (
    <Link href={href} {...props}
    onClick={async(e)=>{
        e.preventDefault()
        document.querySelector('body')?.classList.add('blackOpacity')
        await sleep(1000)
        document.querySelector('body')?.classList.remove('blackOpacity')
        router.push(href)
    }}
    >{children}</Link>
  )
}

export default TransitionLink