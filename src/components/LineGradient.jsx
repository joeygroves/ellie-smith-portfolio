const LineGradient = ({ width = "w-full", colour = "lavender" }) => {
    return <div className={`h-0.5 ${width} bg-${colour}`} />;
  };
  
  export default LineGradient;