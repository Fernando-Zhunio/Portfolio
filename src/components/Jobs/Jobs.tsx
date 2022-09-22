import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useTranslation } from 'react-i18next';

const Jobs = () => {
    const { t } = useTranslation();

    return (
        <div id="Jobs" className="Jobs pt-5">
            <div className="pt-5">
                <div>
                    <h2 className="display-4">{t('Jobs')}</h2>
                    <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. aliquid ipsam sit </p>
                </div>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div>
    );
}

export default Jobs;