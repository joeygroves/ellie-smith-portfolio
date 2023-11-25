// social media icon component

const SocialMediaIcons = () => {

    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500 px-1"
                href="https://www.youtube.com/@elliedee5221"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="youtube-link" src="../assets/youtube-web.svg" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500 px-1"
                href="https://www.instagram.com/ellie.deeee"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/instagram-web.svg"  />
            </a>

            <a
                className="hover:opacity-50 transition duration-500 px-1"
                href="https://www.x.com/elliedeeee"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="x-link" src="../assets/x-web.svg"  />
            </a>

            <a
                className="hover:opacity-50 transition duration-500 px-1"
                href="https://www.tiktok.com/@elliedeeee"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="tiktok-link" src="../assets/tiktok-web.svg"  />
            </a>
        </div>
    );
};

export default SocialMediaIcons;