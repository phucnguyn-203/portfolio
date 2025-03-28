"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bars3Icon,
    MoonIcon,
    SunIcon,
    XMarkIcon,
    AcademicCapIcon,
    CodeBracketIcon,
    UserIcon,
    BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "./ThemeProvider";

// Custom Link component that handles both regular and hash links
const LinkComponent = ({
    href,
    onClick,
    className,
    children,
    icon,
}: {
    href: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    className: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <Link href={href} onClick={onClick} className={className}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </Link>
    );
};

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (href) {
            const targetId = href.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                setIsMenuOpen(false);
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    };

    return (
        <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <AcademicCapIcon className="w-6 h-6 text-blue-500" />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                                Portfolio
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <LinkComponent
                            href="#about"
                            onClick={handleNavClick}
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                            icon={<UserIcon className="w-4 h-4" />}
                        >
                            About
                        </LinkComponent>
                        <LinkComponent
                            href="#skills"
                            onClick={handleNavClick}
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                            icon={<CodeBracketIcon className="w-4 h-4" />}
                        >
                            Skills
                        </LinkComponent>
                        <LinkComponent
                            href="#experience"
                            onClick={handleNavClick}
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                            icon={<BriefcaseIcon className="w-4 h-4" />}
                        >
                            Experience
                        </LinkComponent>
                        <LinkComponent
                            href="#projects"
                            onClick={handleNavClick}
                            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                            icon={<CodeBracketIcon className="w-4 h-4" />}
                        >
                            Projects
                        </LinkComponent>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <MoonIcon className="w-5 h-5 text-gray-600" />
                            ) : (
                                <SunIcon className="w-5 h-5 text-yellow-500" />
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button and theme toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <MoonIcon className="w-5 h-5 text-gray-600" />
                            ) : (
                                <SunIcon className="w-5 h-5 text-yellow-500" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <XMarkIcon className="w-5 h-5 dark:text-white text-black" />
                            ) : (
                                <Bars3Icon className="w-5 h-5 dark:text-white text-black" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="px-4 py-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                            <LinkComponent
                                href="#about"
                                onClick={handleNavClick}
                                className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                                icon={<UserIcon className="w-4 h-4" />}
                            >
                                About
                            </LinkComponent>
                            <LinkComponent
                                href="#skills"
                                onClick={handleNavClick}
                                className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                                icon={<CodeBracketIcon className="w-4 h-4" />}
                            >
                                Skills
                            </LinkComponent>
                            <LinkComponent
                                href="#experience"
                                onClick={handleNavClick}
                                className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                                icon={<BriefcaseIcon className="w-4 h-4" />}
                            >
                                Experience
                            </LinkComponent>
                            <LinkComponent
                                href="#projects"
                                onClick={handleNavClick}
                                className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                                icon={<CodeBracketIcon className="w-4 h-4" />}
                            >
                                Projects
                            </LinkComponent>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
