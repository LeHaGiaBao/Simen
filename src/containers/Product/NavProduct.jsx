import React from 'react'
import NavProductItem from './NavProductItem'

function NavProduct({navProducts, active, children}) {
	return (
		<ul className='nav-product v-center'>
			{navProducts.map(({id, title}) => (
				<NavProductItem key={id} id={id} title={title} active={active} />
			))}
			{children}
		</ul>
	)
}

export default NavProduct
