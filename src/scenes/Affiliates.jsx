import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Affiliates = () => {
    return (
        <section id="affiliates" className="pt-48 pb-48">
            {/* Headings */}
            <motion.div>
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

        </section>
    );
};

export default Affiliates;