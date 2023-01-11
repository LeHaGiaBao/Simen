import React from 'react'
import Header from '../../layouts/Header'
import BrandLogo from '../../layouts/BrandLogo/BrandLogo'
import Footer from '../../layouts/Footer'
import BackToTop from 'react-back-to-top-button'
import {FaAngleUp} from 'react-icons/fa'
import Content from '../../theme/Content/Content'

function Home() {
	return (
		<div>
			<Header />
			<Content />
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

export default Home
