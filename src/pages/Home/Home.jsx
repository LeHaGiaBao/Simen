import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import BackToTop from 'react-back-to-top-button'
import {FaAngleUp} from 'react-icons/fa'
import BrandLogo from '../../components/BrandLogo/BrandLogo'

function Home() {
	return (
		<div>
			<Header />
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
