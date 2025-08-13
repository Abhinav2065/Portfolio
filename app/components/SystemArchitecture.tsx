'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					About Me
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'STEM Instructor',
							description: 'Taught 40+ high school students in the field of STEM.',
							details: [
								'Conducted Arduino Workshop.',
								'Conducted a C-programming competative programming contest with 50+ students',
								'Helped in organization of annual science fest with around 1k visiters',
								'Collaborated and helped in multiple projects with students',
							],
							tech: ['C', 'Python', 'Arduino', 'C++'],
						},
						{
							title: 'STEM club vice president - Deerwalk Sifal School',
							description: 'Worked as the Vice President in my high school.',
							details: [
								'Co-rorganized high school event on science day.',
								'Built multiple projects for different high school events.',
								'Representated my school in multiple tech events.',
								'Helped in Planing of different events.',
							],
							tech: [],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
