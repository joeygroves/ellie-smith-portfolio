import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
    const formEmail = `elliemsmith98@gmail.com`;

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contact" className="py-48">
            {/* Heading */}
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
                <div>
                    <p className="font-montserrat font-black text-4xl text-center">
                        <span className="text-yellow">Contact Me</span> To Get Started
                    </p>

                    <div className="flex md:justify-center my-5">
                        <LineGradient width="mx-auto w-1/2" />
                    </div>

                    {/* Contact Description */}
                    <div className="font-abel text-center mb-7 mx-12 md:max-w-[400px]">
                        <p>For collaborating, creating, quality camera skills or just good conversation, contact me using this form or slide in to my inbox: <a href="mailto:elliemsmith98@gmail.com" className="hover:text-black transition duration-500 underline">elliemsmith98@gmail.com</a></p> 
                    </div>
                </div>
            </motion.div>

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-0 mt-5 md:pt-4">
                <motion.div
                    className="basis-1/2 flex justify-center md:pb-5 md:pl-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img src="../assets/ellie-contact.png" alt="contact" />
                </motion.div>
                <motion.div
                    className="basis-1/2 mt-10 md:mt-0 md:pt-7"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action={`https://formsubmit.co/${formEmail}`}
                        method="POST"
                    >
                        <input
                            className="w-full bg-white font-montserrat font-semibold placeholder-lavender p-3 text-black"
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && "This field is required."}
                                {errors.name.type === 'maxLength' && "Max length is 100 char."}
                            </p>
                        )}

                        <input 
                            className="w-full bg-white font-montserrat font-semibold placeholder-lavender p-3 mt-5 text-black"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === 'required' && "This field is required."}
                                {errors.email.type === 'pattern' && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                            className="w-full bg-white font-montserrat font-semibold placeholder-lavender p-3 mt-5 text-black"
                            type="text"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === 'required' && "This field is required."}
                                {errors.message.type === 'maxLength' && "Max length is 2000 char."}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="p-4 bg-yellow font-semibold text-black mt-5 hover:bg-green hover:text-white transition duration-500"
                        >
                            Submit
                        </button>
                    </form>
                </motion.div>
            </div>
        </section> 
    );
};

export default Contact;