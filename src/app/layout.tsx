import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
	title: 'Radiant Pine LLC',
	description: 'Website consultant and web development assistance'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="bg-stone-700">
			<body className="mt-[-60px]">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
