import React from 'react';

import '@componentStyles/StarRating.scss'
import { ReactComponent as Star } from '@images/rating_star.svg';

function StarRating() {
  
  return (
    <div className='StarRating__container'>
      <Star className='StarRating__star on'/>
      <Star className='StarRating__star on'/>
      <Star className='StarRating__star on'/>
      <Star className='StarRating__star'/>
      <Star className='StarRating__star'/>
    </div>
  );
};

export { StarRating };
