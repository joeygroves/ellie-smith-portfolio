import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const About = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

    return (
        <section
            id="about"
            className="pt-10 pb-24"
        >
            {/* Header and Image Section */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                    <p className="font-montserrat font-black text-4xl mb-5">
                        <span className="text-yellow">About</span> Ellie
                    </p>
                    <LineGradient width="w-1/2" />
                </motion.div>
            </div>

        </section>
    );
};

export default About;