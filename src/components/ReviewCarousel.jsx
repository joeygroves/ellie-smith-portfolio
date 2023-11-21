import FeedbackCard from "./FeedbackCard";
import Carousel from "nuka-carousel";

const testimonialsData = [
    {
      id: 1,
      name: 'John Wills',
      title: "Founder & Leader",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.'
    },
    {
      id: 2,
      name: 'Jasmine Perry',
      title: "Founder & Leader",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!'
    },
    {
      id: 3,
      name: 'Rocky Johnson',
      title: "Founder & Leader",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?'
    }
]

const ReviewCarousel = ({ maxWidth, hideControls }) => {
  return(
      <Carousel 
        autoplay 
        autoplayInterval={3000} 
        wrapAround={true}
        withoutControls={hideControls}
        className={maxWidth}
      >
        {testimonialsData.map((card) => (
            <FeedbackCard key={card.id} {...card} />
            )
          )
        }
      </Carousel>
  );
};

export default ReviewCarousel;