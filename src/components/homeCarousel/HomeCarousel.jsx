import React, { useRef, useState } from 'react'
import './HomeCarousel.css'
import { LiaTelegram } from 'react-icons/lia'
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

function HomeCarousel() {


    return (
        <div className='homeCarousel'>


            <div className="find11">
                <div className="find11_item">
                    <div className="find1_item_text">
                        <h1 style={{ fontSize: "28px" }}>DIDN'T FIND A <span style={{ color: "orange" }}>SUITABLE VACANCY?</span></h1>
                        <h2>Register in our talent pool and subscribe to our Telegram channel to receive new opportunities on your phone!</h2>
                    </div>
                    <div className="find1_item_button">
                        <button> <LiaTelegram /> Subscribe</button>
                        <button> <LiaTelegram />  Submit CV</button>
                    </div>
                </div>
            </div>

            <div className="caouselhomeee1">
                <h1 className='h1_item_1' style={{ marginBottom: "10px" }}>theWORK <span style={{ color: "orange" }}>CHANNEL</span></h1>
                <div className="homecarouselitem1">
                    <>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={20}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/t8ARz5gy7tg?si=8vlkdnBEGfd0IZHq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='crousel_imgs2'>
                                <div className="youtube_videos">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KIdQzqWnh-Y?si=oNHNlnr6tfvGe5CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                <div className="youtube_texts">
                                    <p style={{ fontSize: "19px" }}>Lorem, consectetur  molestias, quis aliquam placeat.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>
                </div>

            </div>

        </div>
    )

}

export default HomeCarousel

