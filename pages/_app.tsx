import '@/css/tailwind.css'
import '@/css/prism.css'
import '@fontsource/inter/variable-full.css'

import type { AppProps } from 'next/app'
import { ClientReload } from '@/components/ClientReload'
import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import PlausibleProvider from 'next-plausible'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <PlausibleProvider domain="cssartchallenge.com">
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </PlausibleProvider>
    </>
  )
}
