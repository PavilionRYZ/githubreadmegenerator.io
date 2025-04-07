/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaRobot } from "react-icons/fa";

const FloatingIcons = () => {
  const icons = [
    { Icon: FaReact, color: "text-cyan-300", size: 50 },
    { Icon: FaGithub, color: "text-white", size: 50 },
    { Icon: FaRobot, color: "text-pink-300", size: 50 },
  ];

  return (
    <>
      {icons.map(({ Icon, color, size }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-60 drop-shadow-lg`}
          initial={{ x: Math.random() * 1200, y: Math.random() * 800 }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
            transition: {
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;