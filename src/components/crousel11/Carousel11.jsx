import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Carousel11.css';

import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {


  return (
    <div className="caouselhomeee">
      <h1 className='h1_item_1' style={{ marginBottom: "-40px" }}>WE HAVE <span style={{ color: "orange" }  }>HIRED FOR </span></h1>
      <div className="homecarouselitem">
        <>
          <Swiper
            slidesPerView={5}
            spaceBetween={100}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd29dd286c29000f6ee3fd_optimized?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd29ede6d558000f0c8e7d_optimized?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd29f9b38659000fb4cd8c_optimized?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd2a16c94c9c000ffe47eb_optimized_600_c600x600-0x0?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd2a2269db330010f1bae8_optimized?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd2ad2e6d558000f0c8f3a_optimized_600_c600x600-0x0?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd2ae969db330010f1bb91_optimized_600_c600x600-0x0?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd2afe69db330010f1bbb3_optimized_600_c600x600-0x0?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd2b0ae6d558000f0c8f7c_optimized?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd2b75e6d558000f0c8ff2_optimized_600_c600x600-0x0?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd29dd286c29000f6ee3fd_optimized?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd29f9b38659000fb4cd8c_optimized?nowebp'} alt="" /></SwiperSlide>
            <SwiperSlide className='crousel_imgs'><img src={'https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd2a07286c29000f6ee446_optimized_600_c600x600-0x0?nowebp'} alt="" /></SwiperSlide>
          </Swiper>
        </>
      </div>

    </div>

  );
}
