import React from 'react'
import './AddToCart.scss'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/Slice/cartSlice'
import {FaShoppingCart} from 'react-icons/fa'

function AddToCart({product}) {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(addToCart(product))
	}

	return (
		<div className='add-to-cart-wrap' onClick={handleClick}>
			<i className='fas fa-shopping-cart'>
				<FaShoppingCart />
			</i>{' '}
			ADD TO CART
		</div>
	)
}

export default AddToCart
