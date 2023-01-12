import React from 'react'
import FooterMenu from '../components/Footer/FooterMenu'
import logo7 from '../assets/image/logo7.png'

function Footer() {
	return (
		<footer className='footer'>
			<div className='grid wide'>
				<FooterMenu />
			</div>
			<div class='last-footer'>
				<div class='grid wide'>
					<div class='last-footer__container v-center'>
						<span>© 2023 Ecommerce website by Wordpress™</span>
						<img src={logo7} alt='logo' />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
