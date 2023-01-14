import React from 'react'
import NavbarPage from '../../containers/Furniture/NavbarPage'
import products from '../../utils/product'
import {furnitureCoverImg} from '../../utils/image'

function FurnitureItem() {
	return (
		<>
			<NavbarPage
				namePage='Furniture'
				products={products}
				imgCover={furnitureCoverImg}
			/>
		</>
	)
}

export default FurnitureItem
