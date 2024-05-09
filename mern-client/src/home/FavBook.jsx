import React from 'react'
import FavBookImg from "../assets/favBook.jpg"
import {Link} from 'react-router-dom';
export default function FavBook() {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between item-center gap-12'>
      <div className='md:w-1/2'>
          <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
      </div>
      <div className='md:w-1/2 space-y-6'>
    <h2 className='text-5xl font-bold my-5 md;w-3/4'>Find Your Favourite book here<span className='text-blue-700'>Book Here!</span></h2>
    <p className='mb-100 text-1g md:w-5/6'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam repellat nisi consequatur architecto. Delectus, sint molestiae impedit voluptates natus voluptatibus sunt odit doloribus velit suscipit eos. Incidunt, optio, nesciunt similique quibusdam nulla officia consectetur numquam, praesentium consequatur expedita voluptatem harum earum veritatis eos ut dolorum beatae. Dolor porro minus consequuntur.</p>
    <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
      <div>
        <h3 className='text-3xl font-bold'>800+</h3>
        <p className='text-base'>Book Listing</p>
      </div>
      <div>
        <h3 className='text-3xl font-bold'>550+</h3>
        <p className='text-base'>Registered Users</p>
      </div>
      <div>
        <h3 className='text-3xl font-bold'>1800+</h3>
        <p className='text-base'>PDF Downloads</p>
      </div>
    </div>
    <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
      </div>
    </div>
  )
}
