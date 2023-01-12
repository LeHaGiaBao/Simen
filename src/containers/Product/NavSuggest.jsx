import React, {useState} from 'react'
import NavSuggestTitlesMobile from './NavSuggestTitlesMobile'
import NavSuggestTitles from './NavSuggestTitles'
import ProductSlider from '../../components/ProductSlider/ProductSlider'

function NavSuggest({products, titles}) {
	const [active, setActive] = useState(0)
	const newProducts = products.filter((el, idx) => idx > active)

	return (
		<>
			<div className='nav-suggest'>
				<NavSuggestTitlesMobile
					titles={titles}
					active={active}
					setActive={setActive}
				/>
				<NavSuggestTitles
					titles={titles}
					active={active}
					setActive={setActive}
				/>
			</div>
			<ProductSlider products={newProducts} />
		</>
	)
}
export default NavSuggest
