import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1}
}

const Project = ({ title, subtitle }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-white z-30 flex flex-col justify-center items-center text-center p-16 text-black`
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-abel">{title}</p>
                <p className="mt-7 font-abel">{subtitle}</p>
            </div>
            <img src={`../assets/${projectTitle}.png`} alt={projectTitle} className="max-w-[400px] max-h-[400px]"/>
        </motion.div>
    )
}

const Affiliates = () => {
    return (
        <section id="affiliates" className="pt-48 pb-48">
            {/* Headings */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-montserrat font-black text-4xl">
                        Brand <span className="text-yellow">Affiliates</span>
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>

                <p className="mt-10 mb-10">
                    Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                    fames odio in at. At magna ornare dictum lectus. Purus massa morbi
                    purus nec eget eleifend ut elit.
                </p>
            </motion.div>

            {/* Brand Affiliates Grid */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* Row 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-yellow
                            max-w-[400px] max-h-[400px] font-abel text-3xl text-black">
                        Past & Current Affiliates
                    </div>
                    <Project title="PayPal Honey" subtitle="Hello"/>
                    <Project title="Tokyo Treat" subtitle="Hello"/>

                    {/* Row 2 */}
                    <Project title="Glasses USA" subtitle="Hello"/>
                    <Project title="Ana Luisa" subtitle="Hello"/>
                    <Project title="Curology" subtitle="Hello"/>
                </motion.div>
            </div>

        </section>
    );
};

export default Affiliates;