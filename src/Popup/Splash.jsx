import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../Icon/Logo";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home/List");
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          width: "50vw",
          maxWidth: "400px",
          minWidth: "200px",
        }}
      >
        <Logo
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </motion.div>

      <style>{`
        img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Splash;