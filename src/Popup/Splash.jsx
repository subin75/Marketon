import React from "react";
import { motion } from "framer-motion";
import Splash from "../Icon/Logo"

const Splash = () => {
    return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <Logo className="w-40 h-40" />
        </motion.div>
    </div>
    );
};

export default Splash;