import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Abhinav Siluwal - Building Stuff',
	description:
		'Welcome to my portfolio! I am a passionate high schooler in Nepal intrested in the field of STEM.',
	keywords: [
		'High Schooler',
		'Software Engineer',
		'Engineering',
		'STEM',
		'Arduino',
		'Linux',
		'Abhinav Siluwal',
		'Node.js',
		'Python',
		'C',
		'C++',
		'Minecraft Developer',
		'React',
	],
	authors: [{ name: 'Abhinav Siluwal' }],
	creator: 'Abhinav Siluwal',
	openGraph: {
		title: 'Abhinav Siluwal - Building Stuff',
		description: 'I am a passionate high schooler in Nepal intrested in the field of STEM.',
		url: 'https://abhinavsiluwal.com.np',
		siteName: 'Abhinav Siluwal - Building Stuff',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Abhinav Siluwal - Building Stuff',
		description: 'I am a passionate high schooler in Nepal intrested in the field of STEM.',
		creator: '@abhinavsl511',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
