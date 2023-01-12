import React, {useState} from 'react'
import {animated, useTrail} from '@react-spring/web'
import Product from './Product'
import LoadButton from './LoadButton'

function ProductItems({products}) {
	const [listProducts, setListProduct] = useState([...Array(5).keys()])
	const trail = useTrail(listProducts.length, {
		from: {opacity: 0, transform: 'scale(0)'},
		to: {opacity: 1, transform: 'scale(1)'},
	})

	return (
		<>
			<div className='row'>
				{trail.map(({...otherProps}, idx) => {
					const {id, isSale, img, name, oldPrice, newPrice, rating} =
						products[idx]
					return (
						<animated.div
							key={id}
							className='col xlg-2-4 lg-2-4 md-4 sm-6 xsm-12'
							style={{...otherProps}}>
							<Product
								id={id}
								isSale={isSale}
								img={img}
								name={name}
								oldPrice={oldPrice}
								newPrice={newPrice}
								rating={rating}
							/>
						</animated.div>
					)
				})}
			</div>
			{listProducts.length < products.length && (
				<LoadButton setListProduct={setListProduct} />
			)}
		</>
	)
}

export default ProductItems
