import { motion } from "framer-motion";

const RevealWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

export default RevealWrapper;