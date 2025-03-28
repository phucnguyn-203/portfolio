"use client";

import { motion } from "framer-motion";
import {
    CodeBracketIcon,
    CloudIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { ComponentType } from "react";

interface SkillCategory {
    title: string;
    icon: ComponentType<{ className?: string }>;
    description: string;
    skills: string[];
    gradient: string;
    iconGradient: string;
}

const skillCategories: SkillCategory[] = [
    {
        title: "Web Development",
        icon: CodeBracketIcon,
        description: "Modern web development technologies and best practices",
        skills: ["React", "Next.js", "Angular", "Spring Boot", "REST", "MySQL"],
        gradient: "from-blue-500/10 to-purple-500/10",
        iconGradient: "from-blue-600 via-indigo-500 to-purple-600",
    },
    {
        title: "DevOps",
        icon: CloudIcon,
        description: "Continuous integration, deployment, and containerization",
        skills: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "Linux"],
        gradient: "from-green-500/10 to-blue-500/10",
        iconGradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
        title: "Security",
        icon: ShieldCheckIcon,
        description: "Cybersecurity and secure coding practices",
        skills: [
            "OWASP Top 10",
            "SIEM Solutions",
            "Secure Coding Practices",
            "Penetration Tools (Burp Suite, Metasploit)",
        ],
        gradient: "from-red-500/10 to-orange-500/10",
        iconGradient: "from-rose-500 via-red-500 to-orange-500",
    },
];

export default function SkillsSection() {
    return (
        <section
            id="skills"
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
                        Skills
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg transition-colors duration-300">
                        Technical expertise and capabilities
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                style={{
                                    background: `linear-gradient(to bottom right, ${
                                        category.gradient.split(" ")[1]
                                    }, ${category.gradient.split(" ")[3]})`,
                                }}
                            ></div>
                            <div className="relative flex flex-col h-full">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div
                                        className={`p-2.5 bg-gradient-to-br ${category.iconGradient} rounded-lg shadow-lg shadow-black/5 dark:shadow-black/20 group-hover:shadow-xl group-hover:shadow-black/10 dark:group-hover:shadow-black/30 transition-all duration-300`}
                                    >
                                        <category.icon className="w-8 h-8 text-white drop-shadow-sm" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                                    {category.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    delay:
                                                        index * 0.1 +
                                                        skillIndex * 0.05,
                                                }}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                                            >
                                                {skill}
                                            </motion.span>
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
