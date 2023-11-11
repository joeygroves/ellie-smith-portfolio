// social media icon component

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="youtube-link" src="../assets/youtube.svg" className="scale-50"/>
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/instagram.svg" className="scale-50" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.x.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="x-link" src="../assets/x.svg" className="scale-50" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.tiktok.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="tiktok-link" src="../assets/tiktok.svg" className="scale-50" />
            </a>
        </div>
    );
};

export default SocialMediaIcons;