import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import BackToTop from 'react-back-to-top-button'
import BrandLogo from '../../containers/BrandLogo/BrandLogo'
import {FaAngleUp} from 'react-icons/fa'
import Container from '../../layouts/Container'

function Home() {
	return (
		<div>
			<Header />
			<Container />
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
