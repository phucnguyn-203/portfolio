"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    ArrowDownIcon,
    EnvelopeIcon,
    DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function HeroSection() {
    const [particles, setParticles] = useState<Array<{ x: number; y: number }>>(
        []
    );

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Base Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

                {/* Animated Gradient Orbs */}
                <motion.div
                    className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-blob"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-blob animation-delay-2000"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-30 animate-blob animation-delay-4000"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle, index) => (
                    <motion.div
                        key={index}
                        className={`absolute rounded-full ${
                            index % 3 === 0
                                ? "w-4 h-4 bg-blue-400/50 dark:bg-blue-400/30"
                                : index % 3 === 1
                                ? "w-3 h-3 bg-purple-400/50 dark:bg-purple-400/30"
                                : "w-2 h-2 bg-pink-400/50 dark:bg-pink-400/30"
                        } blur-[2px]`}
                        initial={{
                            x: particle.x,
                            y: particle.y,
                            scale: 0.5,
                            opacity: 0.3,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: [0.5, 1.5, 0.5],
                            opacity: [0.3, 0.8, 0.3],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/10 shadow-sm"
                        >
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Welcome to my portfolio
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold"
                        >
                            <span className="text-gray-900 dark:text-white">
                                Hi, I&apos;m{" "}
                            </span>
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                {"Nguyen Hoang Phuc"
                                    .split("")
                                    .map((char, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.8 + index * 0.2,
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                            </span>
                        </motion.h1>

                        {/* <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
                        >
                            I&apos;m a student at Post and Telecommunications
                            Institute of Technology HCMC majoring in Information
                            Security. I&apos;m passionate about learning new
                            things and always ready to take on new challenges.
                        </motion.p> */}

                        {/* Contact Information Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-12 flex justify-center lg:justify-start gap-4"
                        >
                            {[
                                {
                                    icon: <EnvelopeIcon className="w-6 h-6" />,
                                    link: "mailto:phucnguyenhoang3007@gmail.com",
                                    gradient: "from-blue-500 to-indigo-500",
                                },
                                {
                                    icon: (
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ),
                                    link: "https://github.com/phucnguyn-203",
                                    gradient: "from-gray-700 to-gray-900",
                                },
                                {
                                    icon: (
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    ),
                                    link: "https://www.linkedin.com/in/nguyenphuc3007/",
                                    gradient: "from-blue-600 to-blue-800",
                                },
                            ].map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.7 + index * 0.1,
                                    }}
                                    className="group p-3 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <div
                                        className={`p-2 bg-gradient-to-br ${info.gradient} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {info.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <DocumentArrowDownIcon className="w-5 h-5" />
                                    Get Resume
                                </span>
                                <div className="absolute inset-0 bg-gray-50 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Code Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full"
                    >
                        <div className="relative w-full max-w-2xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl blur-3xl"></div>
                            <div className="relative rounded-3xl bg-white dark:bg-[#0d1224] border border-gray-200 dark:border-[#1b2c68a0] p-4 sm:p-6 lg:p-8 shadow-xl dark:shadow-2xl">
                                {/* Code Header */}
                                <div className="flex items-center justify-between mb-4 sm:mb-6">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        information.ts
                                    </div>
                                </div>

                                {/* Code Content */}
                                <div className="font-mono text-xs sm:text-sm space-y-1.5 sm:space-y-2.5">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2,
                                        }}
                                        className="flex items-center group"
                                    >
                                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold group-hover:text-indigo-500 transition-colors">
                                            const
                                        </span>
                                        <span className="text-gray-900 dark:text-white mx-1 sm:mx-2 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                            information
                                        </span>
                                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold group-hover:text-indigo-500 transition-colors">
                                            =
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 mx-1 sm:mx-2">
                                            &#123;
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3,
                                        }}
                                        className="ml-2 sm:ml-4 group"
                                    >
                                        <span className="text-gray-900 dark:text-white font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                            fullName:
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 mx-1 sm:mx-2">
                                            &#39;
                                        </span>
                                        <span className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">
                                            Nguyen Hoang Phuc
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            &#39;,
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3,
                                        }}
                                        className="ml-2 sm:ml-4 group"
                                    >
                                        <span className="text-gray-900 dark:text-white font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                            dateOfBirth:
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 mx-1 sm:mx-2">
                                            &#39;
                                        </span>
                                        <span className="text-purple-600 dark:text-purple-400 group-hover:text-purple-500 transition-colors">
                                            2003-07-30
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            &#39;,
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3,
                                        }}
                                        className="ml-2 sm:ml-4 group"
                                    >
                                        <span className="text-gray-900 dark:text-white font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                            university:
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 mx-1 sm:mx-2">
                                            &#39;
                                        </span>
                                        <span className="text-rose-600 dark:text-rose-400 group-hover:text-rose-500 transition-colors">
                                            Post and Telecommunications
                                            Institute of Technology HCMC
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            &#39;,
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3,
                                        }}
                                        className="ml-2 sm:ml-4 group"
                                    >
                                        <span className="text-gray-900 dark:text-white font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                            major:
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 mx-1 sm:mx-2">
                                            &#39;
                                        </span>
                                        <span className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors">
                                            Information Security
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            &#39;,
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3,
                                        }}
                                        className="ml-2 sm:ml-4 group"
                                    >
                                        <span className="text-gray-900 dark:text-white font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                            expectedGraduation:
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 mx-1 sm:mx-2">
                                            &#39;
                                        </span>
                                        <span className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors">
                                            2026
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            &#39;,
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.7,
                                        }}
                                        className="ml-2 sm:ml-4 group"
                                    >
                                        <span className="text-gray-900 dark:text-white font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                            hardWorking:
                                        </span>
                                        <span className="text-blue-600 dark:text-blue-400 mx-1 sm:mx-2 group-hover:text-blue-500 transition-colors">
                                            true
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400">
                                            ,
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.8,
                                        }}
                                        className="ml-2 sm:ml-4 group"
                                    >
                                        <span className="text-gray-900 dark:text-white font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                                            quickLearning:
                                        </span>
                                        <span className="text-blue-600 dark:text-blue-400 mx-1 sm:mx-2 group-hover:text-blue-500 transition-colors">
                                            true
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1.2,
                                        }}
                                        className="ml-2 sm:ml-4"
                                    >
                                        <span className="text-gray-500 dark:text-gray-400">
                                            &#125;
                                        </span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    <ArrowDownIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}
