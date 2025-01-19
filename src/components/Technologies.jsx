import { motion } from 'framer-motion';
import {
    SiAdobe,
    SiC,
    SiCplusplus,
    SiDocker,
    SiFigma,
    SiFirebase,
    SiGithub,
    SiHeroku,
    SiJavascript,
    SiMarkdown,
    SiNetlify,
    SiOpencv,
    SiPython,
    SiTailwindcss,
    SiTensorflow,
    SiVercel,
} from 'react-icons/si';

const iconVariants = (delay) => ({
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { delay: delay } },
});

const TechnologiesSection = () => {
  return (
    <div className="border-b border border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 2.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Existing Technology Icons */}
        <motion.div variants={iconVariants(0.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFirebase className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGithub className="text-7xl text-black" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiOpencv className="text-7xl text-green-400" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFigma className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-teal-400" />
        </motion.div>

        {/* Additional Technology Icons */}
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHeroku className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNetlify className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiVercel className="text-7xl text-black" />
        </motion.div>
        <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMarkdown className="text-7xl text-gray-400" />
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAdobe className="text-7xl text-red-400" />
        </motion.div>

        {/* Programming Language Icons */}
        <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants(7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiC className="text-7xl text-gray-400" />
        </motion.div>
        <motion.div variants={iconVariants(8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div variants={iconVariants(8.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechnologiesSection;
