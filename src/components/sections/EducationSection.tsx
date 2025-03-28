"use client";

import AnimateIn from "@/components/AnimateIn";
import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function EducationSection() {
    return (
        <section
            id="education"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <AnimateIn>
                    <motion.h2
                        className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Education
                    </motion.h2>
                </AnimateIn>
                <div className="space-y-8">
                    <AnimateIn delay={0.7}>
                        <motion.div
                            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-start gap-6">
                                <motion.div
                                    className="p-4 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-xl shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/20 dark:group-hover:shadow-purple-500/10 transition-all duration-300"
                                    whileHover={{ rotate: 5, scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <AcademicCapIcon className="w-8 h-8 text-white drop-shadow-sm" />
                                </motion.div>
                                <div className="flex-1">
                                    <motion.h3
                                        className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.8,
                                        }}
                                    >
                                        Information Security Engineering
                                    </motion.h3>
                                    <motion.p
                                        className="text-indigo-600 dark:text-indigo-400 text-lg mb-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.9,
                                        }}
                                    >
                                        Post and Telecommunications Institute of
                                        Technology HCMC
                                    </motion.p>
                                    <motion.p
                                        className="text-gray-500 dark:text-gray-400 mb-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 1 }}
                                    >
                                        2021 - Present
                                    </motion.p>
                                    <motion.p
                                        className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1.1,
                                        }}
                                    >
                                        Currently pursuing my degree with a
                                        focus on cybersecurity, web security,
                                        and new technologies.
                                    </motion.p>
                                    <div className="flex flex-wrap gap-3">
                                        {["Expected Graduation: 2026"].map(
                                            (tag, index) => (
                                                <motion.span
                                                    key={index}
                                                    className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium shadow-md"
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay:
                                                            1.2 + index * 0.1,
                                                    }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {tag}
                                                </motion.span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
}
