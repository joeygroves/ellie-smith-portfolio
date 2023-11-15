import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const About = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="about"
            className="pt-10 pb-24"
        >
            {/* Header */}
            <div className="md:flex md:justify-between md:gap-16 mt-32 pt-28">
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
                    
                    <div className="mt-10 mb-7">
                        Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                        fames odio in at.<br />

                        <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Blandit aliquam etiam 
                        erat velit. Sagittis nisl rhoncus mattis rhoncus urna. 
                        Condimentum lacinia quis vel eros donec ac odio. <br />
                        
                        <br />Egestas maecenas pharetra 
                        convallis posuere morbi leo urna molestie at. Fames ac turpis egestas sed 
                        tempus urna et pharetra pharetra. 
                    </div>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
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