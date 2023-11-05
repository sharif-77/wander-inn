import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className=''>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper  " >
       <SwiperSlide className='absolute' >
        <img className='block w-full' src="https://i.ibb.co/k1MN1mJ/nick-romanov-hw4a-UQ81ic-unsplash.jpg" alt="" />
      
        </SwiperSlide>
       <SwiperSlide ><img className='block w-full' src="https://i.ibb.co/64RpCnR/sidekix-media-L6-y-Kzsr-Jz-E-unsplash.jpg" alt="" /></SwiperSlide>
       <SwiperSlide ><img className='block w-full' src="https://i.ibb.co/F6t0ZgH/oswald-elsaboath-ym-EI-DTS1g-unsplash.jpg" alt="" /></SwiperSlide>
       <SwiperSlide ><img className='block w-full' src="https://i.ibb.co/SNKZFxC/shawn-lee-0s-SJMTf-LXUI-unsplash.jpg" alt="" /></SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Banner;
