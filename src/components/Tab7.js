import React from 'react';
import { placesStore } from '../store/Store';
import "../styles/Tab1.css";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FiHeart } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { Pagination } from "swiper";

const Tab7 = () => {
  return (
    <div>
      <div className='tab1-hold flex justify-center md:mb-48 mb-28 items-center sm:gap-12 gap-0 -mt-16 flex-wrap w-full'>
        {placesStore.map((item => {
          if (item.type === "islands") {
            return (
              <div className='card boxsh' key={item.id}>
                <Link to={`/${item.id}`}>
                  <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    loop={true}
                    observer={true}
                    observeParents={true}
                    parallax={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                  >
                    {/* Swiper slides */}
                  </Swiper>

                  {item.pets && <div className='flex label'> <BsStars /> POPULAR </div>}

                  <div className='flex gap-0 pl-3 pr-3 justify-between'>
                    {/* Price and heart icon */}
                  </div>

                  {/* Property name, address, and separator */}

                  <div className='flex justify-center pl-2 gap-4 md:gap-3'>
                    {/* Bed, bath, and floors */}
                  </div>

                </Link>
              </div>
            )
          }
        }))}
      </div>
    </div>
  )
}

export default Tab7;
