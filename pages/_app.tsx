import Footer from '@/components/modules/Footer'
import Header from '@/components/modules/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font', 
})

export default function App({ Component, pageProps }: AppProps) {

  const route = useRouter()

  return (
    <div className={inter.className}>
      <Header light={route.asPath == '/' || route.asPath == '/#algorithms'} />
      <Component {...pageProps} />
      <Footer />
    </div>
  ) 
}
