import React from 'react'
import TopHeader from './Header/TopHeader'
import BotHeader from './Header/BotHeader'
import HeaderMenu from './Header/HeaderMenu'

function Header() {
	return (
		<header className='header'>
			<TopHeader />
			<BotHeader />
			{/* <HeaderMenu /> */}
		</header>
	)
}

export default Header
