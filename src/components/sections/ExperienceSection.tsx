"use client";

import AnimateIn from "@/components/AnimateIn";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-4xl mx-auto relative">
                <AnimateIn>
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h2
                            className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-3"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Work Experience
                        </motion.h2>
                        <motion.div
                            className="h-1.5 w-32 mx-auto bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-full shadow-lg"
                            initial={{ width: 0 }}
                            animate={{ width: 128 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </motion.div>
                </AnimateIn>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Timeline Line with glow */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-purple-500 to-blue-500 dark:from-orange-400 dark:via-purple-400 dark:to-blue-400 rounded-full shadow-[0_0_18px_rgba(129,140,248,0.55)]"></div>

                    {/* ELCA VIETNAM - Most Recent */}
                    <AnimateIn delay={0.3}>
                        <div className="relative mb-12 md:mb-16">
                            <div className="flex flex-col md:flex-row items-start md:items-center">
                                {/* Timeline Dot */}
                                <motion.div
                                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    whileHover={{ scale: 1.2, rotate: 180 }}
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                                        <div className="relative w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 border-4 border-white dark:border-gray-900 transition-all duration-300">
                                            <BriefcaseIcon className="w-10 h-10 text-white drop-shadow-lg" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    className="ml-24 md:ml-0 md:w-[calc(50%-4rem)] md:mr-auto md:pr-12 w-full"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    whileHover={{ scale: 1.05, x: -10 }}
                                >
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
                                        <div className="relative bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-7 shadow-2xl transition-all duration-300 border-2 border-orange-300 dark:border-orange-700 group-hover:border-orange-400 dark:group-hover:border-orange-600">
                                            <p className="text-orange-600 dark:text-orange-400 text-xl font-extrabold mb-2 tracking-wide">
                                                ELCA VIETNAM
                                            </p>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                                Associate QA Engineer
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 flex items-center gap-2 font-medium">
                                                <span className="relative flex h-3 w-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                                </span>
                                                July 2025 - Now
                                            </p>
                                            <div className="flex flex-wrap gap-2.5">
                                                {["Software Testing", "Playwright"].map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 dark:from-orange-900 dark:via-red-900 dark:to-pink-900 text-orange-700 dark:text-orange-200 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 border border-orange-300 dark:border-orange-700"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </AnimateIn>

                    {/* TMA SOLUTIONS */}
                    <AnimateIn delay={0.5}>
                        <div className="relative mb-12 md:mb-16">
                            <div className="flex flex-col md:flex-row items-start md:items-center">
                                {/* Timeline Dot */}
                                <motion.div
                                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    whileHover={{ scale: 1.2, rotate: 180 }}
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                                        <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 border-4 border-white dark:border-gray-900 transition-all duration-300">
                                            <BriefcaseIcon className="w-10 h-10 text-white drop-shadow-lg" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    className="ml-24 md:ml-0 md:w-[calc(50%-4rem)] md:ml-auto md:pl-12 w-full"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    whileHover={{ scale: 1.05, x: 10 }}
                                >
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
                                        <div className="relative bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-7 shadow-2xl transition-all duration-300 border-2 border-indigo-300 dark:border-indigo-700 group-hover:border-indigo-400 dark:group-hover:border-indigo-600">
                                            <p className="text-indigo-600 dark:text-indigo-400 text-xl font-extrabold mb-2 tracking-wide">
                                                TMA SOLUTIONS
                                            </p>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                                Front End Developer Intern
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 font-medium">
                                                June 2024 - August 2024
                                            </p>
                                            <div className="flex flex-wrap gap-2.5">
                                                {["Angular", "Gitlab CI/CD"].map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 border border-blue-300 dark:border-blue-700"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
}
