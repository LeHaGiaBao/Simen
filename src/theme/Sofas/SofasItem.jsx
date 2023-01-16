import React from 'react'
import NavbarPage from '../../containers/NavbarPage/NavbarPage'
import products from '../../utils/product'
import {sofasCoverImg} from '../../utils/image'

function SofasItem(props) {
	const sofasProducts = products.filter(
		({categorys}) => categorys.indexOf('Sofas') > -1
	)

	return (
		<NavbarPage
			namePage='Sofas'
			products={sofasProducts}
			imgCover={sofasCoverImg}
		/>
	)
}

export default SofasItem
