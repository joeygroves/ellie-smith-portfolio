import LineGradient from "../components/LineGradient";
import useMediaQuery from '../hooks/useMediaQuery';
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
            <img src={`../assets/${projectTitle}.png`} alt={projectTitle} className="md:max-w-[400px] md:max-h-[400px]"/>
        </motion.div>
    )
}

const Affiliates = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

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

            {/* Brand Affiliates Logos Grid */}
            <div className="flex justify-center">
                {isAboveMediumScreens ? (
                    <motion.div
                    className="md:grid md:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* Row 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-yellow
                            md:max-w-[400px] md:max-h-[400px] font-abel text-3xl text-black">
                        Past & Current Affiliates
                    </div>
                    <Project 
                        title="PayPal Honey" 
                        subtitle="PayPal Honey is a free browser extension that searches for some 
                        of the best deals on the internet. One-click and Honey automatically searches 
                        for and tests available coupon codes at checkout on 30,000+ popular sites."
                    />
                    <Project 
                        title="Tokyo Treat" 
                        subtitle="TokyoTreat is a subscription-based service that delivers you a box 
                        full of unique and fun Japanese candies and snacks directly to your doorstep 
                        every month. Each box has a hand-picked collection of Japanese snacks.
                        Get Your Monthly Dose of Tasty Japanese Candy, rare Japanese soda & more With TokyoTreat!"
                    />

                    {/* Row 2 */}
                    <Project 
                        title="Glasses USA" 
                        subtitle="Set out to disrupt the traditional eyewear industry, GlassesUSA.com is the largest 
                        online eyewear retailer offering a variety of both high-quality designer and house brands with 
                        a wide-range of styles and lens types including: single vision lenses, multifocal lenses, Rx sunglasses, 
                        sports glasses, kids glasses, contact lenses and more."
                    />
                    <Project 
                        title="Ana Luisa" 
                        subtitle="Since its founding in 2018, Ana Luisa has worked to elevate the everyday of people around the
                         world with Earth-friendly jewelry that lasts. Ana Luisa continues to challenge the jewelry industry by 
                         bridging the gap between quality, accessibility, and sustainability."
                    />
                    <Project 
                        title="Curology" 
                        subtitle="Founded by Dr. David Lortscher in 2014, Curology has led the way in making personalized skincare accessible 
                        in all 50 states. Now, Dr. David walks us through his journey—from practicing dermatology in New Mexico to helping 
                        change the lives of millions of people."
                    />
                </motion.div>
                ) : (
                    <motion.div
                    className="md:grid md:grid-cols-3"
                    initial="visible"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* Row 1 */}
                    <div className="flex justify-center text-center items-center p-10 bg-yellow
                            md:max-w-[400px] md:max-h-[400px] font-abel text-3xl text-black">
                        Past & Current Affiliates
                    </div>
                    <Project 
                        title="PayPal Honey" 
                        subtitle="PayPal Honey is a free browser extension that searches for some 
                        of the best deals on the internet. One-click and Honey automatically searches 
                        for and tests available coupon codes at checkout on 30,000+ popular sites."
                    />
                    <Project 
                        title="Tokyo Treat" 
                        subtitle="TokyoTreat is a subscription-based service that delivers you a box 
                        full of unique and fun Japanese candies and snacks directly to your doorstep 
                        every month. Each box has a hand-picked collection of Japanese snacks.
                        Get Your Monthly Dose of Tasty Japanese Candy, rare Japanese soda & more With TokyoTreat!"
                    />

                    {/* Row 2 */}
                    <Project 
                        title="Glasses USA" 
                        subtitle="Set out to disrupt the traditional eyewear industry, GlassesUSA.com is the largest 
                        online eyewear retailer offering a variety of both high-quality designer and house brands with 
                        a wide-range of styles and lens types including: single vision lenses, multifocal lenses, Rx sunglasses, 
                        sports glasses, kids glasses, contact lenses and more."
                    />
                    <Project 
                        title="Ana Luisa" 
                        subtitle="Since its founding in 2018, Ana Luisa has worked to elevate the everyday of people around the
                         world with Earth-friendly jewelry that lasts. Ana Luisa continues to challenge the jewelry industry by 
                         bridging the gap between quality, accessibility, and sustainability."
                    />
                    <Project 
                        title="Curology" 
                        subtitle="Founded by Dr. David Lortscher in 2014, Curology has led the way in making personalized skincare accessible 
                        in all 50 states. Now, Dr. David walks us through his journey—from practicing dermatology in New Mexico to helping 
                        change the lives of millions of people."
                    />
                </motion.div>
                )}
                
            </div>

        </section>
    );
};

export default Affiliates;