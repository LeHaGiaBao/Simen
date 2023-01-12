import React, {useState, useEffect} from 'react'
import './Products.scss'
import NavProduct from './NavProduct'

function Products({navProducts, children}) {
	const [active, setActive] = useState(1)

	useEffect(() => {
		if (navProducts.length < 2) setActive(0)
	}, [])

	return (
		<div className='products'>
			<NavProduct navProducts={navProducts} active={active} />
			{children}
		</div>
	)
}

export default Products
