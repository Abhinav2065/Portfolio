'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6 relative">
					<div className="absolute top-4 right-4 flex items-center gap-2">
						<div className="w-3 h-3 rounded-full  flex items-center justify-center text-white text-s font-bold">
  ×
</div>
					</div>
					<div className="font-mono">
						<p className="text-green-500">&gt; whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Abhinav Siluwal</h1>
						<p className="text-gray-400 mb-2">STEM Innovator | Robotics, Coding & Electronics Builder</p>
						<p className="text-green-500">&gt; skills</p>
						<div className="flex flex-wrap gap-2 mt-2">
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">C++</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">C</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Git</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Linux</span>
							{/* <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Kubernetes</span> */}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
