import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, width, height }) => (
        <div className="">
            <iframe 
                width={`${width}`}
                height={`${height}`}
                src={`https://www.youtube.com/embed/${embedId}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
            >
            </iframe>
        </div>
    );

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
    };

export default YoutubeEmbed;