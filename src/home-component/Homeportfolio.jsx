import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sliderdata from '../../src/Data/slider.json';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";

const Homeportfolio = () => {
    return (
        <div className="main-homeportfolio-div">
            <div className="homeportfolio">
                <div className="homeportfolio-heading">
                    <h1>Ons Portfolio</h1>
                    <p>Diverse reeks prestaties</p>

                </div>
            </div>
            <div className='homeportfolio-container'>
                <Swiper
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        600: { slidesPerView: 1 },
                        769: { slidesPerView: 2 },
                        992: { slidesPerView: 2 }
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className='swiper_container'
                >
                    {sliderdata.map(item => (
                        <SwiperSlide key={item.id}>
                            <div className='slide-content'>
                                <div className='slider-image-container'>
                                    <img src={item.image} alt={item.title} aria-hidden='true' className='slider-image' />
                                    <div className='image-overlay'>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <button>
                                            <Link to={`/home/details/${item.id}`}>Meer weten</Link>
                                            <div className="more-arrow">
                                                <IoIosArrowRoundForward className='more-icon' />
                                            </div>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Homeportfolio;
