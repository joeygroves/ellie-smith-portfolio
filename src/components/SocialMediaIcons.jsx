
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="youtube-link" src="../assets/youtube.svg" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/instagram.svg" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;