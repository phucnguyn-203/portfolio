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
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-0 left-1/2 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <AnimateIn>
                    <motion.h2
                        className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Work Experience
                    </motion.h2>
                </AnimateIn>
                <div className="space-y-8">
                    <AnimateIn delay={0.8}>
                        <motion.div
                            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-start gap-6">
                                <motion.div
                                    className="p-4 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10 transition-all duration-300"
                                    whileHover={{ rotate: 5, scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <BriefcaseIcon className="w-8 h-8 text-white drop-shadow-sm" />
                                </motion.div>
                                <div className="flex-1">
                                    <motion.h3
                                        className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.9,
                                        }}
                                    >
                                        Front End Developer Intern
                                    </motion.h3>
                                    <motion.p
                                        className="text-indigo-600 dark:text-indigo-400 text-lg mb-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 1 }}
                                    >
                                        TMA SOLUTIONS
                                    </motion.p>
                                    <motion.p
                                        className="text-gray-500 dark:text-gray-400 mb-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1.1,
                                        }}
                                    >
                                        June 2024 - August 2024
                                    </motion.p>
                                    <motion.h1>
                                        <strong>Project name:</strong> Travel
                                        Social WebApp
                                    </motion.h1>
                                    <motion.ul
                                        className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed list-disc pl-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1.2,
                                        }}
                                    >
                                        <li>
                                            <strong>Description:</strong> A
                                            social travel platform that connects
                                            users through travel experiences and
                                            provides integrated services such as
                                            hotel and flight booking for a
                                            seamless trip planning experience.
                                        </li>
                                        <li>
                                            <strong>Role:</strong> Front-End
                                            Developer Intern
                                        </li>
                                        <li>
                                            <strong>Responsibilities:</strong>
                                            <ul className="list-disc pl-6">
                                                <li>
                                                    Developed user interface
                                                    components using Angular to
                                                    enhance usability and user
                                                    experience.
                                                </li>
                                                <li>
                                                    Integrated RESTful APIs for
                                                    hotel and flight booking
                                                    services, ensuring real-time
                                                    data flow and a smooth
                                                    booking experience.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Tech stack:</strong>{" "}
                                            Angular, RESTful API, Git
                                        </li>
                                        <li>
                                            <strong>Team size:</strong> Worked
                                            in one of several front-end teams,
                                            collaborating with other teams in a
                                            large microservices-based project.
                                        </li>
                                    </motion.ul>
                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            "Angular",
                                            "Docker",
                                            "Gitlab CI/CD",
                                            "Team Collaboration",
                                            "Problem Solving",
                                        ].map((skill, index) => (
                                            <motion.span
                                                key={index}
                                                className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 text-emerald-600 dark:text-emerald-300 rounded-full text-sm font-medium shadow-md"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 1.3 + index * 0.1,
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
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
