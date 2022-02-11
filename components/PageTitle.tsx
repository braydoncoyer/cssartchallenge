import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-2 text-4xl font-extrabold leading-normal text-transparent md:text-6xl md:leading-normal">
      {children}
    </h1>
  )
}
