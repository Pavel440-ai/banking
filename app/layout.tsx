import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

const ibmPlexSerif = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-ibm-plex-serif',
})

export const metadata: Metadata = {
	title: 'Horizon',
	description: 'Horizon is a modern banking platform for everyone.',
	icons: '/public/icons/logo.svg',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
				{children}
			</body>
		</html>
	)
}
