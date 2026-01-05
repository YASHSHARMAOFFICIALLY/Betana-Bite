
"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";


interface NavbarProps {
  setCartOpen: (open: boolean) => void;
  totalItems: number;
  user: any; 
  onLoginClick: () => void;
  onLogout: () => void;
}

export default function Navbar({ 
  setCartOpen, 
  totalItems, 
  user, 
  onLoginClick, 
  onLogout 
}: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const navLinks = [
        { href: "#mission", label: "Mission" },
        { href: "#shop", label: "Flavours" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                   
                    <motion.div 
                        className="flex items-center gap-2 sm:gap-3 cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center shadow-md">
                            <span className="font-serif text-base sm:text-lg font-bold text--700">Bb</span>
                        </div>
                        <div className="font-serif text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                            Betana Bites
                        </div>
                    </motion.div>




              
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-700 font-medium hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    
                        {user ? (
                            <div className="relative ml-2">
                                <button
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-semibold">
                                        {user.name?.[0]?.toUpperCase() || <User size={16} />}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 hidden lg:block">
                                        {user.name}
                                    </span>
                                </button>
                                
                                <AnimatePresence>
                                    {userMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1"
                                        >
                                            <button
                                                onClick={() => {
                                                    onLogout();
                                                    setUserMenuOpen(false);
                                                }}
                                                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <LogOut size={16} />
                                                Logout
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <button
                                onClick={onLoginClick}
                                className="ml-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                            >
                                Login
                            </button>
                        )}





               
                        <motion.button
                            onClick={() => setCartOpen(true)}
                            className="ml-2 relative px-4 lg:px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ShoppingCart size={18} />
                            <span className="hidden lg:inline">Cart</span>
                            {totalItems > 0 && (
                                <motion.span
                                    key={totalItems}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                                    className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white shadow-md"
                                >
                                    {totalItems > 99 ? "99+" : totalItems}
                                </motion.span>
                            )}
                        </motion.button>
                    </nav>

                  
                    <div className="md:hidden flex items-center gap-2">
                        {/* Mobile Cart Button */}
                        <motion.button
                            onClick={() => setCartOpen(true)}
                            className="relative p-2 rounded-full bg-orange-500 text-white shadow-md"
                            whileTap={{ scale: 0.9 }}
                        >
                            <ShoppingCart size={20} />
                            {totalItems > 0 && (
                                <motion.span
                                    key={totalItems}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white"
                                >
                                    {totalItems > 9 ? "9+" : totalItems}
                                </motion.span>
                            )}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-200 bg-white"
                    >
                        <nav className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            
                            {/* Mobile User Section */}
                            <div className="pt-2 border-t border-gray-200">
                                {user ? (
                                    <div className="space-y-1">
                                        <div className="px-4 py-2 text-sm text-gray-500">
                                            Logged in as <span className="font-semibold text-gray-700">{user.name}</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                onLogout();
                                                setMobileMenuOpen(false);
                                            }}
                                            className="w-full flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                        >
                                            <LogOut size={18} />
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => {
                                            onLoginClick();
                                            setMobileMenuOpen(false);
                                        }}
                                        className="w-full flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                    >
                                        <User size={18} />
                                        Login
                                    </button>
                                )}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}