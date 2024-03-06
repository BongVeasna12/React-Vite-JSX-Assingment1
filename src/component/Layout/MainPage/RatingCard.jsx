'use strict';
import { Rating } from 'flowbite-react';

export default function RatingCard() {
  return (
    <div className='Rating'>
    <div>
    <Rating className="star">
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <p className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
    </Rating>
    <div className='RatingStar'>
    <p className=" mb-5 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
    <Rating.Advanced percentFilled={70} className="mb-4 ">
      Apple Watch        
    </Rating.Advanced>
    <Rating.Advanced percentFilled={17} className="mb-4">
      Mac Book Pro    
    </Rating.Advanced>
    <Rating.Advanced percentFilled={80} className="mb-4">
      Mac Mini      
    </Rating.Advanced>
    <Rating.Advanced percentFilled={4} className="mb-4 ">
      Iphone 15 Pro Max 
    </Rating.Advanced>
    <Rating.Advanced percentFilled={1}>Ipad pro 2022</Rating.Advanced>
    </div>
    </div>
    </div>
  );
}
