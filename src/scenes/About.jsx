import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const About = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="about"
            className="pt-10 pb-20"
        >
            {/* Header */}
            <div className="md:flex md:justify-between md:gap-16 pt-32">
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
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                            }}
                    >
                        <div className="mt-10 mb-7">
                            A channel dedicated to vlogging and lifestyle content with a relaxed atmosphere.
                            Open conversations, simple vegan cooking, and a healthy dose of humor make this channel 
                            a welcoming resting place for viewers to enjoy.  <br />
                        </div>
                    </motion.div>
                </motion.div>
                    

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                    <motion.div
                        className="flex justify-center w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                }}
                    >
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                                    before:w-full before:h-full"
                        >
                            <img
                                alt="about"
                                className="z-10"
                                src="assets/ellie-about-photos.png"
                            />
                        </div>
                    </motion.div>
                    ) : (
                        <div className="flex justify-center items-center">
                            <img 
                                alt="skills"
                                className="z-10"
                                src="assets/ellie-about-photos.png"
                            />
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
};

export default About;