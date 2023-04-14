import React, {useState, useEffect, forwardRef} from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../redux/Slice/cartSlice'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import ProductRating from '../../components/ProductRating/ProductRating'
import {IoMdCart} from 'react-icons/io'
import {AiFillHeart} from 'react-icons/ai'
import {FaRandom} from 'react-icons/fa'
import {BsEyeFill} from 'react-icons/bs'

const Product = forwardRef(({id, isSale, img, name, oldPrice, newPrice, rating}, ref) => {
	const [isHover, setIsHover] = useState(false)
	const styles = {
		overflow: isHover ? 'initial' : 'hidden',
	}
	const handleOnMouseOver = () => {
		setIsHover(true)
	}

	const handleOnMouseOut = () => {
		setIsHover(false)
	}
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch(addToCart({id, isSale, img, name, oldPrice, newPrice, rating}))
	}

	return (
		<div className={classNames('product', {'product--sale': isSale})}>
			<div className='product-img-info' style={styles}>
				<Link to={`/product/${id}`} className='product__link' ref={ref}>
					<img src={img} className='product__img' alt='' />
					<div className='product__sale'>SALE!</div>
				</Link>
				<div className='item-box-hover'>
					<div className='cart-wrap' onClick={handleClick}>
						<i className='fas fa-shopping-cart'>
							<IoMdCart />
						</i>{' '}
						ADD TO CART
					</div>
					<div className='box-inner v-center'>
						<span
							className='box-inner__item wishlist'
							onMouseOver={handleOnMouseOver}
							onMouseOut={handleOnMouseOut}>
							<i className='fas fa-heart'>
								<AiFillHeart />
							</i>
							<div className='icon-script'>Add to Wishlist</div>
						</span>
						<span
							className='box-inner__item compare'
							onMouseOver={handleOnMouseOver}
							onMouseOut={handleOnMouseOut}>
							<i className='fas fa-random'>
								<FaRandom />
							</i>
							<div className='icon-script'>Compare</div>
						</span>
						<span
							className='box-inner__item view'
							onMouseOver={handleOnMouseOver}
							onMouseOut={handleOnMouseOut}>
							<i className='fas fa-eye'>
								<BsEyeFill />
							</i>
							<div className='icon-script'>Quick View</div>
						</span>
					</div>
				</div>
			</div>
			<Link to={`/product/${id}`} className='product__name'>
				{name}
			</Link>
			<div className='product__price'>
				{isSale && <span className='old-price'>$ {oldPrice.toFixed(2)}</span>}
				<span className='new-price'>$ {newPrice.toFixed(2)}</span>
			</div>
			<ProductRating rating={rating} />
		</div>
	)
})

export default Product
