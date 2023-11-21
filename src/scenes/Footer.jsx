import LineGradient from '../components/LineGradient';

const Footer = () => {
    return (
        <footer className="h-44 bg-green pt-10">
            <div className="w-5/6 mx-auto">
                <p className="font-montserrat font-black text-2xl text-white mb-3 md:justify-start md:text-left text-center">Ellie Smith</p>
                
                <LineGradient colour="white"/>
                <div className="md flex justify-center md:justify-end text-center mt-2">
                    <p className="font-montserrat font-normal text-md text-white">© 2023 ELLIE SMITH | Designed & Developed by <a href="https://www.github.com/joeygroves" className="hover:text-black transition duration-500">Joey Groves</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;