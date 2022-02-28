import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text py-2 text-4xl font-extrabold tracking-tight text-transparent sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
      {children}
    </h1>
  )
}
