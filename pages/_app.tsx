import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/components/themeprovider/ThemeProvider'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <main
          className={`relative flex min-h-screen flex-col bg-background text-primary ${inter.className}`}>
          <Component {...pageProps} />
          <Toaster />
        </main>
      </ThemeProvider>
    </SessionProvider>
  )
}
