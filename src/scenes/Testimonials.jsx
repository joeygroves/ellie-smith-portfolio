import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {

    return (
        <section 
            id="testimonials" 
            className="pt-32 pb-16"
        >
            {/* HEADING */}
            <motion.div
                    className="md:w-1/3 text-center pt-28"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
            >
                <p className="font-montserrat font-black text-4xl mb-5 text-yellow">
                    Testimonials
                </p>
                <LineGradient width="mx-auto w-1/2" />
            </motion.div>
        </section>
    );
};

export default Testimonials;