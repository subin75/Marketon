import React from "react";
import { motion } from "framer-motion";
import Logo from "../Icon/Logo";

const Splash = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Logo style={{ width: "320px", height: "320px" }} />
      </motion.div>
    </div>
  );
};

export default Splash;
