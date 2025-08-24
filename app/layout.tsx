import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from '@/components/ui/sonner'
import { DirectionProvider } from '@/context/direction-provider'
import { FontProvider } from '@/context/font-provider'
import { ThemeProvider } from '@/context/theme-provider'
import { QueryClient } from '@/lib/query-client'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Shadcn Admin',
  description: 'Admin Dashboard UI built with Shadcn and Next.js.',
  metadataBase: new URL('https://shadcn-admin.netlify.app'),
  openGraph: {
    type: 'website',
    url: 'https://shadcn-admin.netlify.app',
    title: 'Shadcn Admin',
    description: 'Admin Dashboard UI built with Shadcn and Next.js.',
    images: [
      {
        url: 'https://shadcn-admin.netlify.app/images/shadcn-admin.png',
        width: 1200,
        height: 630,
        alt: 'Shadcn Admin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadcn Admin',
    description: 'Admin Dashboard UI built with Shadcn and Next.js.',
    images: ['https://shadcn-admin.netlify.app/images/shadcn-admin.png'],
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/images/favicon.svg',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/images/favicon_light.svg',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicon.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/images/favicon_light.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
        <body>
          <QueryClientProvider client={QueryClient}>
            <ThemeProvider>
              <FontProvider>
                <DirectionProvider>
                  {children}
                  <Toaster duration={5000} />
                  {process.env.NODE_ENV === 'development' && (
                    <ReactQueryDevtools buttonPosition='bottom-left' />
                  )}
                </DirectionProvider>
              </FontProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
