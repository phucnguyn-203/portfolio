"use client";

import AnimateIn from "@/components/AnimateIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-0 left-1/2 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <AnimateIn>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                            My Projects
                        </h2>
                    </motion.div>
                </AnimateIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "CTF Battleground",
                            description:
                                "A Capture The Flag (CTF) platform for cybersecurity enthusiasts to practice and improve their skills.",
                            category: "Web Development",

                            technologies: [
                                "Angular",
                                "Spring Boot",
                                "MySQL",
                                "Docker",
                                "Kubernetes",
                                "CI/CD",
                            ],
                            image: "/images/ctf.devmaster.id.vn.png",
                            link: "https://ctf.devmaster.id.vn",
                            gradient: "from-green-500 to-blue-500",
                        },
                        {
                            title: "Movie Streaming Website",
                            description:
                                "A movie streaming website with a modern design and responsive layout.",
                            category: "Web Development",
                            technologies: [
                                "Next.js",
                                "Tailwind CSS",
                                "Framer Motion",
                                "TypeScript",
                            ],
                            image: "/images/movine.vercel.app.png",
                            link: "https://movine.vercel.app/",
                            gradient: "from-blue-500 to-cyan-500",
                        },

                        {
                            title: "Portfolio Website",
                            description:
                                "A modern portfolio website with smooth animations, dark mode, and responsive design.",
                            category: "Web Development",
                            technologies: [
                                "Next.js",
                                "Tailwind CSS",
                                "Framer Motion",
                                "TypeScript",
                            ],
                            image: "/images/portfolio.png",
                            link: "https://github.com/yourusername/portfolio",
                            gradient: "from-orange-500 to-red-500",
                        },
                    ].map((project, index) => (
                        <AnimateIn key={index} delay={0.2 * index}>
                            <motion.div
                                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 * index,
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                                    ></div>
                                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 animate-pulse">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="text-4xl">🚀</div>
                                    </motion.div>
                                </div>
                                <div className="p-6">
                                    <motion.div
                                        className="flex items-center justify-between mb-2"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3 + index * 0.2,
                                        }}
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm text-indigo-600 dark:text-indigo-400">
                                            {project.category}
                                        </span>
                                    </motion.div>
                                    <motion.p
                                        className="text-gray-600 dark:text-gray-300 mb-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.4 + index * 0.2,
                                        }}
                                    >
                                        {project.description}
                                    </motion.p>
                                    <motion.div
                                        className="flex flex-wrap gap-2 mb-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 + index * 0.2,
                                        }}
                                    >
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm shadow-sm"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            )
                                        )}
                                    </motion.div>
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6 + index * 0.2,
                                        }}
                                        whileHover={{ x: 5 }}
                                    >
                                        View Project
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
