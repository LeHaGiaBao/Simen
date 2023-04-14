import React, {useEffect} from 'react'
import './ViewCart.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getTotals, removeFromCart} from '../../../redux/Slice/cartSlice'
import {IoMdCart} from 'react-icons/io'
import {FaTrashAlt} from 'react-icons/fa'

function ViewCart() {
	const carts = useSelector((state) => state.carts)
	console.log(carts)
	const cartQuantity = carts.cartTotalQuantity
	const cartTotalAmount = carts.cartTotalAmount
	const dispatch = useDispatch()

	const handleClick = (item) => {
		dispatch(removeFromCart(item))
	}

	useEffect(() => {
		dispatch(getTotals())
	})

	return (
		<div className='header__menu__right__cart'>
			<div className='mycart'>
				<i className='fas fa-shopping-cart'>
					<IoMdCart />
				</i>
				<span className='cart__number'>{cartQuantity}</span>
				<div className='view-cart'>
					{cartQuantity === 0 ? (
						<div className='empty'>
							<span>No products in the cart.</span>
						</div>
					) : (
						<div className='have-item'>
							<div className='item-container'>
								{carts.cartItems.map((item) => (
									<div className='item'>
										<div className='item__image'>
											<img src={item.img} alt='' />
										</div>
										<div className='item__infor'>
											<span className='item__name'>
												{item.name}
											</span>
											<span className='item__price'>
												{item.cartQuantity} x ${' '}
												{item.newPrice.toFixed(2)}
											</span>
										</div>
										<div
											className='item__remove'
											onClick={() => handleClick(item)}>
											<i className='fas fa-trash-alt'>
												<FaTrashAlt />
											</i>
										</div>
									</div>
								))}
							</div>
							<div className='total-price'>
								<span className='total'>Total:</span>
								<span className='price'>
									$ {cartTotalAmount.toFixed(2)}
								</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ViewCart
