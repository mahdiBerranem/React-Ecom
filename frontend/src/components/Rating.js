import React from 'react'

export default function Rating(props) {
    const {rating, numReviews} = props;
    return (
<div className="rating">
              <span> <i className={rating >= 1
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o' } /> </span>
              <span> <i className={rating >= 2
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o' } /> </span>
              <span> <i className={rating >= 3
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o' } /> </span>
              <span> <i className={rating >= 4
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o' } /> </span>
              <span> <i className={rating >= 5
              ? 'fa fa-star'
              : rating >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o' } /> 
              </span>

              <span>{numReviews + 'reviews'} </span>

            </div>
    )
}

