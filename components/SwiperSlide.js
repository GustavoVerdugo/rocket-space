
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const SwiperSlide = () => {
    return (
        <Splide
            options={{
                type: 'loop',
                rewind: true,
                gap: '1rem',
            }}>
            <SplideSlide className="lg:h-16">
                <img src="https://www.spacex.com/static/images/backgrounds-2021/crs-23/HP_CRS23_causeway_DSC_7027_Desktop.jpg" className="rounded shadow-md" />
            </SplideSlide>
            <SplideSlide>
                <img src="https://www.spacex.com/static/images/backgrounds-2021/hls-resized-2.jpg" className="rounded shadow-md" />
            </SplideSlide>
        </Splide>
    )
}

export default SwiperSlide
