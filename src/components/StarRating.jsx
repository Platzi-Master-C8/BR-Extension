import React from 'react';

import '@componentStyles/StarRating.scss'
import { ReactComponent as Star } from '@images/rating_star.svg';

function StarRating() {
  const [stars, setStars] = React.useState('')

  // React.useEffect(() => {
  //   console.log(stars)
    
  // }, [stars])
  
  const onClick = e => {
    const rating = parseInt(e.target.getAttribute('value'));
    const stars = Array.from(document.getElementsByClassName('StarRating__star'))
    console.log(rating)
    console.log(e.target)
    console.log(e)
    stars.slice(0,rating).map(element => {
      element.classList.add('on');
      // console.log(element)
    })
    // stars.slice(rating+1).map(element => {
    //   console.log(rating)
    //   console.log(element)
    //   element.classList.remove('on');
    // })
  }

  return (
    <div className='StarRating__container'>
      <Star className='StarRating__star' onClick={onClick} value={1} />
      <Star className='StarRating__star' onClick={onClick} value={2} />
      <Star className='StarRating__star' onClick={onClick} value={3} />
      <Star className='StarRating__star' onClick={onClick} value={4} />
      <Star className='StarRating__star' onClick={onClick} value={5} />
    </div>
  );
};

export { StarRating };
