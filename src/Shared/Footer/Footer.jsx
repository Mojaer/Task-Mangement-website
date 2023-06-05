

const Footer = () => {
    return (
        <footer className="footer my-5">
            <div className="container">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} Task Management Tool. All rights reserved.
                    <br />
                    Made by Mojaer Ahmed.
                </p>
            </div>
        </footer>
    );
};

export default Footer;