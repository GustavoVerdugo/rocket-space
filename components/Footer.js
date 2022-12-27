const Footer = () => {
    return (
        <footer class="footer-1 bg-transparent py-2 sm:py-2">
            <div class="container mx-auto px-4">
                <div class="justify-center text-white sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12">
                    <div class="flex justify-center px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                        <strong>Rockets Space</strong>
                    </div>
                    <div class="flex justify-center px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                        <a href="https://www.linkedin.com/in/gustavo-verdugo-ortiz-37b032168/">
                            <h6 class="font-bold mb-2">Developed by GustavoVerdugo</h6>
                        </a>
                    </div>
                    <div class="flex justify-center px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                        <a href="https://www.buymeacoffee.com/gustavoverdugo" target="_blank">
                            <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" className="w-52" alt="Buy Me A Coffee" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;