
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const BrandSlider = () => {
    return (
        <div className="w-full space-x-4">
            <section className="py-8 px-4 mx-auto">
                <div className="flex items-center justify-center mx-4 -mb-8">
                    <div className="w-28 rounded-xl m-1 sm:w-36 md:w-44 max-w-xs md:p-5 bg-white">
                        <img className="max-h-14 mx-auto" src="https://bryggeri.corelabs.cl/wp-content/uploads/2021/10/logo_Kunstmann_D.png" />
                    </div>
                    <div className="w-28 rounded-xl m-1 sm:w-36 md:w-44 max-w-xs md:p-5 bg-white">
                        <img className="max-h-14 mx-auto" src="https://bryggeri.corelabs.cl/wp-content/uploads/2021/10/LOGO-AUSTRAL-NEGRO.png" />
                    </div>
                    <div className="w-28 rounded-xl m-1 sm:w-36 md:w-44 max-w-xs md:p-5 bg-white">
                        <img className="max-h-14 mx-auto" src="https://bryggeri.corelabs.cl/wp-content/uploads/2021/10/Heineken-Logo.png" />
                    </div>
                    <div className="w-28 rounded-xl m-1 sm:w-36 md:w-44 max-w-xs md:p-5 bg-white">
                        <img className="max-h-14 mx-auto" src="https://bryggeri.corelabs.cl/wp-content/uploads/2021/10/Stella-Artois-Logo-1.png" />
                    </div>
                    <div className="w-28 rounded-xl m-1 sm:w-36 md:w-44 max-w-xs md:p-5 bg-white">
                        <img className="max-h-14 mx-auto" src="https://bryggeri.corelabs.cl/wp-content/uploads/2021/10/Leffe_Logo.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BrandSlider
