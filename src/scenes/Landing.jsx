import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* Main Section */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* Headings */}
                {/* Framer Motion Animations */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl font-montserrat font-black z-10 text-center md:text-start">
                        Hi I'm Ellie!
                    </p>

                    <p className="mt-10 mb-7 text-2xl text-center  font-semibold md:text-start">
                        Lorem ipsum dolor sit amet, consectetur adipiscing sed.
                    </p>
                </motion.div>

                {/* Call to actions */}
                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                <AnchorLink
                    className="bg-green text-deep-blue rounded-sm py-3 px-7 font-abel font-semibold
                    hover:bg-blue hover:text-black transition duration-500 text-lg"
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                >
                    Contact Me
                </AnchorLink>

                <AnchorLink
                    className="rounded-r-sm bg-yellow py-0.5 pr-0.5 pl-0.5"
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                >
                    <div className="bg-purple text-white hover:text-black transition duration-500 w-full h-full flex items-center justify-center px-10 font-abel text-lg">
                    Let's talk.
                    </div>
                </AnchorLink>
                </motion.div>

                {/* Social Media Icons */}
            </div>
        </section>
    )
}

export default Landing;