import React from 'react'
import {
	navProducts1,
	products,
	navProducts2,
	titles,
	adversImages,
	productMostViewed,
	productLatestPost,
} from '../../utils/content'
import ImagesAndAnimations from '../../containers/Content/ImagesAndAnimations'
import Products from '../../containers/Product/Products'
import ProductItems from '../../containers/Product/ProductItems'
import NewProduct from '../../containers/Content/NewProduct'
import NavSuggest from '../../containers/Product/NavSuggest'
import AdversImages from '../../containers/Content/AdversImages'
import MostViewed from '../../containers/Content/MostViewed'
import LatestPost from '../../containers/Content/LatestPost'

function ContentItem() {
	return (
		<div className='container'>
			<div className='grid wide'>
				<ImagesAndAnimations />
				<Products navProducts={navProducts1}>
					<ProductItems products={products} />
				</Products>
				<NewProduct />
				<Products navProducts={navProducts2}>
					<NavSuggest products={products} titles={titles} />
					<AdversImages imgs={adversImages} />
					<MostViewed props={productMostViewed} />
					<LatestPost props={productLatestPost} />
				</Products>
			</div>
		</div>
	)
}

export default ContentItem
