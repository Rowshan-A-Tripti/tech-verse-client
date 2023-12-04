import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';




const Banner = () => {
    return (
        <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/DgZMWDc/20231203-181724.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/bFFNVY0/20231203-190151.jpg" /></SwiperSlide>
        g
      
      </Swiper>
        </div>
    );
};

export default Banner;