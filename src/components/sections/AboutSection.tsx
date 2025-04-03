"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    UserIcon,
    AcademicCapIcon,
    CommandLineIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

export default function AboutSection() {
    const features = [
        {
            icon: <UserIcon className="w-6 h-6" />,
            title: "Personal Background",
            description:
                "Passionate about technology and innovation, with a strong foundation in both theoretical knowledge and practical applications.",
            gradient: "from-blue-500 to-indigo-500",
        },
        {
            icon: <AcademicCapIcon className="w-6 h-6" />,
            title: "Education",
            description:
                "Currently pursuing my undergraduate degree in Information Security, focusing on web development, DevOps, and security.",
            gradient: "from-indigo-500 to-purple-500",
        },
        {
            icon: <CommandLineIcon className="w-6 h-6" />,
            title: "Technical Skills",
            description:
                "Proficient in modern web technologies, cloud platforms, and security practices, with a keen interest in continuous learning.",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: <SparklesIcon className="w-6 h-6" />,
            title: "Passion",
            description:
                "Dedicated to creating innovative solutions and making a positive impact through technology.",
            gradient: "from-pink-500 to-rose-500",
        },
    ];

    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-blue-900/20 transition-colors duration-300"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-indigo-900/20 transition-colors duration-300"></div>
                <div className="absolute top-0 left-1/2 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-purple-900/20 transition-colors duration-300"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                        About Me
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg transition-colors duration-300">
                        A passionate person focused on creating secure and
                        scalable web applications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 dark:from-blue-400/20 dark:via-indigo-400/20 dark:to-purple-400/20"></div>
                            <div className="relative aspect-square w-full h-[550px] max-w-md mx-auto">
                                <Image
                                    src="/avatar.jpg"
                                    alt="My Avatar"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 dark:bg-purple-400/20 rounded-full blur-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                        >
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                I&apos;m currently studying Information Security
                                and have a growing interest in software
                                development, DevOps, and cybersecurity. While
                                I&apos;m still building my experience, I’ve
                                worked on web applications, cloud deployments,
                                and security best practices. I enjoy learning
                                new technologies, optimizing workflows, and
                                exploring how security fits into development and
                                infrastructure. I&apos;m always excited to take
                                on new challenges and grow my skills—let’s
                                connect!
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.1,
                                    }}
                                    className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                        style={{
                                            backgroundImage: `linear-gradient(to bottom right, ${feature.gradient})`,
                                        }}
                                    ></div>
                                    <div className="relative flex items-center space-x-4">
                                        <div
                                            className={`p-2 bg-gradient-to-br ${feature.gradient} rounded-lg text-white`}
                                        >
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
