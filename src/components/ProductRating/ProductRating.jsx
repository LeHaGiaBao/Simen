import React from 'react'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'

function ProductRating({rating}) {
	const numberStars = [...Array(5).keys()].map((x) => ++x)

	return (
		<div className='product__rating'>
			{numberStars.map((i, idx) => {
				if (i <= rating)
					return (
						<i key={idx} className='far fa-star fas fa-star--gold'>
							<FaStar />
						</i>
					)
				else {
					return i === rating + 0.5 ? (
						<i key={idx} className='fas fa-star-half-alt'>
							<FaStarHalfAlt />
						</i>
					) : (
						<i key={idx} className='far fa-star'>
							<FaStar />
						</i>
					)
				}
			})}
		</div>
	)
}

export default ProductRating
