import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Jabones D.X. — Rituales Naturales para tu Piel',
  description:
    'Jabones artesanales elaborados con ingredientes naturales para el cuidado facial y corporal. Envíos a toda Colombia.',
  keywords: 'jabones naturales, jabones artesanales, cuidado piel, Colombia',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5EFE0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${jost.variable} bg-background`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
