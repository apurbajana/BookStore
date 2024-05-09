import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 import {FaStar} from "react-icons/fa6";
 import dP from "../assets/dp.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';
import { Avatar } from 'flowbite-react';
// import required modules
import { Pagination } from 'swiper/modules';

export default function Review() {
  return (
    <div className='my-12 px-4 lg:px-14'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customer</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-white shadow-2xl px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae odit eveniet, cupiditate sapiente nam tempora neque velit consequatur maiores, ab aliquam dolore commodi repellat explicabo iure! Rem debitis, amet deleniti id blanditiis non commodi sequi tempora molestias quis atque. Iure quasi doloribus nulla, repudiandae beatae eveniet sequi ratione quae accusamus, architecto doloremque eum soluta minima distinctio rerum incidunt dolore.</p>
                <Avatar
        alt="avatar of Jese"
        img={dP}
        rounded
        className='w-10 mb-4'
      />
      <h5 className='text-lg font-medium'>Apurba Jana</h5>
      <p className='text-base'>CEO, Youtube</p>
      </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-white shadow-2xl px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae odit eveniet, cupiditate sapiente nam tempora neque velit consequatur maiores, ab aliquam dolore commodi repellat explicabo iure! Rem debitis, amet deleniti id blanditiis non commodi sequi tempora molestias quis atque. Iure quasi doloribus nulla, repudiandae beatae eveniet sequi ratione quae accusamus, architecto doloremque eum soluta minima distinctio rerum incidunt dolore.</p>
                <Avatar
        alt="avatar of Jese"
        img={dP}
        rounded
        className='w-10 mb-4'
      />
      <h5 className='text-lg font-medium'>Apurba Jana</h5>
      <p className='text-base'>CEO, Youtube</p>
      </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-white shadow-2xl px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae odit eveniet, cupiditate sapiente nam tempora neque velit consequatur maiores, ab aliquam dolore commodi repellat explicabo iure! Rem debitis, amet deleniti id blanditiis non commodi sequi tempora molestias quis atque. Iure quasi doloribus nulla, repudiandae beatae eveniet sequi ratione quae accusamus, architecto doloremque eum soluta minima distinctio rerum incidunt dolore.</p>
                <Avatar
        alt="avatar of Jese"
        img={dP}
        rounded
        className='w-10 mb-4'
      />
      <h5 className='text-lg font-medium'>Apurba Jana</h5>
      <p className='text-base'>CEO, Youtube</p>
      </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}
