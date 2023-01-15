import React from 'react'
import NavbarPage from '../../containers/Furniture/NavbarPage'
import products from '../../utils/product'
import {furnitureCoverImg} from '../../utils/image'

function CoffeeTablesItem() {
	const coffeeTablesProducts = products.filter(
		({categorys}) => categorys.indexOf('Coffee Tables') > -1
	)

	return (
		<>
			<NavbarPage
				namePage='Coffee Tables'
				products={coffeeTablesProducts}
				imgCover={furnitureCoverImg}
			/>
		</>
	)
}

export default CoffeeTablesItem
