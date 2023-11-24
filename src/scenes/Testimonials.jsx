import LineGradient from "../components/LineGradient";
import ReviewCarousel from "../components/ReviewCarousel";
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from "framer-motion";

const Testimonials = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section 
            id="testimonials" 
            className="pt-32 pb-16"
        >
            {/* HEADING */}
            <motion.div
                    className="md:w-1/3 text-center"
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

            {/* Testimonial Slider */}
            <div className="flex justify-center">
                {isAboveMediumScreens ? (
                    <motion.div>
                        <ReviewCarousel maxWidth={"max-w-[1100px]"} hideControls={false}/>
                    </motion.div>
                ) : (
                    <div>
                        <ReviewCarousel maxWidth={"max-w-[320px]"} hideControls={true}/>
                    </div>
                )}
                
            </div>
        </section>
    );
};

export default Testimonials;