
const FeedbackCard = ({ description, name, title }) => {
    return (
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] mx-auto my-0">
            {/* Testimonial Description */}
            <p className="font-montserrat font-semibold italic text-[18px] leading-[32.4px] text-white my-10">
                “{description}”
            </p>

            {/* Name and Title */}
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <h4 className="font-montserrat font-normal text-[20px] leading-[32px] text-white">
                        {name}
                    </h4>
                    <p className="font-montserrat font-normal italic text-[13px] leading-[24px] text-white">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;