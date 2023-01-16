import React from 'react'
import Header from '../../layouts/Header'
import SofasItem from '../../theme/Sofas/SofasItem'
import BrandLogo from '../../layouts/BrandLogo/BrandLogo'
import Footer from '../../layouts/Footer'
import BackToTop from 'react-back-to-top-button'
import {FaAngleUp} from 'react-icons/fa'

function Sofas() {
	return (
		<div>
			<Header />
			<SofasItem />
			<BrandLogo />
			<Footer />
			<BackToTop showAt={100} speed={500}>
				<i>
					<FaAngleUp />
				</i>
			</BackToTop>
		</div>
	)
}

export default Sofas
